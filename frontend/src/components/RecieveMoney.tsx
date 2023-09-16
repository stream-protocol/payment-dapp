import React, { useState } from "react";
import { useRouter } from 'next/router'

export default function SendUSDC() {
  const [amount, setAmount] = useState(0);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [usdcWalletAddress, setUsdcWalletAddress] = useState(""); // Added USDC wallet address state
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if the amount and recipient address are valid before proceeding
    if (amount > 0 && recipientAddress && usdcWalletAddress) {
      // Redirect to the transaction page with query parameters
      router.push(`/transaction?amount=${amount}&recipientAddress=${recipientAddress}&usdcWalletAddress=${usdcWalletAddress}`);
    } else {
      alert("Please fill in all fields correctly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 mx-12 w-1/3">
      <p className="pb-1">To send USDC, please enter the following details:</p>
      <div className="flex flex-col py-5">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Enter your recipient's USDC address:
          <input
            type="text"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Recipient's USDC address"
            required
          />
        </label>
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Enter the amount of USDC to send:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            min={0}
            step={0.01}
            className="shadow appearance-none border rounded w-12 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-5"
            placeholder="Amount (USDC)"
            required
          />
        </label>
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Enter your USDC wallet address (Solana compliant):
          <input
            type="text"
            value={usdcWalletAddress}
            onChange={(e) => setUsdcWalletAddress(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your USDC Wallet Address"
            required
          />
        </label>
        <button
          type="submit"
          className="items-center px-20 rounded-md py-2 max-w-fit bg-gray-900 text-white hover:scale-105 disabled:opacity-50"
        >
          Send USDC
        </button>
      </div>
    </form>
  )
}