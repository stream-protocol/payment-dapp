import { useState } from 'react';
import { PublicKey } from '@solana/web3.js';

// Replace with your wallet integration setup
import { useWallet } from './WalletProvider'; // Import your wallet provider hook

const TransactionForm = () => {
  const wallet = useWallet(); // Replace with your wallet integration hook

  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSendUSDC = async () => {
    try {
      if (!wallet.connected) {
        console.error('Wallet not connected');
        return;
      }

      const usdcTokenAddress = new PublicKey('YOUR_USDC_TOKEN_ADDRESS'); // Replace with your actual USDC token address
      const lamportsToSend = parseFloat(amount) * 1000000; // Convert amount to lamports (1 USDC = 1 million lamports)

      // Create a new transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(receiverAddress),
          lamports: lamportsToSend,
        })
      );

      // Sign the transaction with the wallet
      const signedTransaction = await wallet.signTransaction(transaction);

      // Send and confirm the transaction
      const signature = await wallet.connection.sendRawTransaction(signedTransaction.serialize());
      await wallet.connection.confirmTransaction(signature);

      console.log('USDC sent successfully with signature:', signature);
    } catch (error) {
      console.error('Error sending USDC:', error);
    }
  };

  return (
    <div>
      <h2>Send USDC Transaction</h2>
      <div>
        <label>Receiver Address:</label>
        <input
          type="text"
          value={receiverAddress}
          onChange={(e) => setReceiverAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Amount (USDC):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleSendUSDC}>Send USDC</button>
    </div>
  );
};

export default TransactionForm;