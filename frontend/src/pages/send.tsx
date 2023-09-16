import React, { useEffect, useMemo, useRef } from "react";
import {
  createQR,
  encodeURL,
  TransferRequestURLFields,
  findReference,
  validateTransfer,
  FindReferenceError,
  ValidateTransferError,
} from "@solana/pay";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import { useRouter } from "next/router";
import calculatePrice from "../components/calculatePrice";

const usdcAddress = new PublicKey('8k1JM5Cd6Hz7G6Jsq1FSzgRYPyS4RFj9k11Uvt5bgWRP');

export default function Checkout() {
  const router = useRouter();
  const qrRef = useRef(null);
  const receiverAddress = new PublicKey(router.query.address);
  const amount = useMemo(() => calculatePrice(router.query), [router.query]);
  const reference = useMemo(() => Keypair.generate().publicKey, []);

  const urlParams = {
    recipient: receiverAddress,
    splToken: usdcAddress,
    amount,
    reference,
    label: `Send money to ${router.query.address}`,
    message: "Thanks for using Lamhi! 💖",
  };

  const url = encodeURL(urlParams);

  useEffect(() => {
    // Generate and display the QR code
    const qr = createQR(url, 512, 'transparent');
    if (qrRef.current && amount.isGreaterThan(0)) {
      qrRef.current.innerHTML = '';
      qr.append(qrRef.current);
    }
  }, [url, amount]);

  useEffect(() => {
    // Check if the transaction is completed
    const interval = setInterval(async () => {
      try {
        const signatureInfo = await findReference(connection, reference, { finality: 'confirmed' });
        await validateTransfer(
          connection,
          signatureInfo.signature,
          {
            recipient: receiverAddress,
            amount,
            splToken: usdcAddress,
            reference,
          },
          { commitment: 'confirmed' }
        );
        router.push('/thank-you');
      } catch (e) {
        if (e instanceof FindReferenceError) {
          // No transaction found yet, ignore this error
          return;
        }
        if (e instanceof ValidateTransferError) {
          // Transaction is invalid, display an error message to the user
          console.error('Transaction is invalid', e);
          // You can set an error state here and display it to the user
        } else {
          // Unknown error, display an error message to the user
          console.error('Unknown error', e);
          // You can set an error state here and display it to the user
        }
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [amount, receiverAddress, reference]);

  return (
    <div className="flex flex-col items-center gap-8 h-screen">
      <button
        type="button"
        onClick={() => router.push('/dashboard')}
        className="items-start px-20 rounded-md py-2 max-w-fit bg-gray-900 text-white hover:scale-105 mt-3"
      >
        ⬅️&nbsp;&nbsp; Go back to your dashboard
      </button>

      <div className="justify-center border-2 border-dashed border-gray-300 rounded-xl justify-center items-center h-[80vh] p-6">
        <h1>
          Please scan the QR code below with your StreamPay or Solana wallet if you want to send{' '}
          <span className="font-bold">${amount.toString()}</span> to{' '}
          <span className="font-bold pl-1">{router.query.address}</span>
        </h1>
        <p className="py-2 text-red-600">Please note that the transaction upon completion is irreversible</p>

        {/* div added to display the QR code */}
        <div ref={qrRef} />
      </div>
    </div>
  );
}
