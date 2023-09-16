import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

function WalletInteraction() {
  const { wallet, connect, disconnect, select } = useWallet();

  const connectWallet = async () => {
    try {
      await connect(); // Connect to the selected wallet
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnect(); // Disconnect the connected wallet
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  const selectWalletNetwork = (network) => {
    select(network); // Select the specified network (Devnet, Testnet, or Mainnet)
  };

  return (
    <div>
      <h1>Wallet Interaction</h1>
      {wallet ? (
        <div>
          <p>Connected wallet: {wallet.publicKey.toBase58()}</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      ) : (
        <div>
          <p>No wallet connected</p>
          <button onClick={connectWallet}>Connect Wallet</button>
        </div>
      )}
      <div>
        <h2>Select Wallet Network</h2>
        <button onClick={() => selectWalletNetwork(WalletAdapterNetwork.Devnet)}>Devnet</button>
        <button onClick={() => selectWalletNetwork(WalletAdapterNetwork.Testnet)}>Testnet</button>
        <button onClick={() => selectWalletNetwork(WalletAdapterNetwork.Mainnet)}>Mainnet</button>
      </div>
    </div>
  );
}

export default WalletInteraction;