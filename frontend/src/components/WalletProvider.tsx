import React, { createContext, useContext, useEffect, useState } from 'react';
import { ConnectionProvider, WalletProvider as WalletAdapterProvider } from '@solana/wallet-adapter-react';
import {
  WalletAdapterNetwork,
  useLocalStorage,
  useWallet,
  WalletProvider as WalletAdapterProvider,
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  MathWalletWalletAdapter,
  WalletConnectWalletAdapter,
  SlopeWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// Create a context for the wallet
const WalletContext = createContext();

// WalletProvider component
export const WalletProvider = ({ children }) => {
  // Determine the network
  const network = WalletAdapterNetwork.Testnet; // Set to 'Testnet'

  // Get the cluster API endpoint based on the network
  const endpoint = clusterApiUrl(network);

  // Wallet adapters for different providers
  const walletAdapters = [
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    SolletWalletAdapter,
    MathWalletWalletAdapter,
    WalletConnectWalletAdapter,
    SlopeWalletAdapter,
  ];

  // Initialize the wallet
  const wallet = useWallet();

  // Store the wallet's public key in local storage
  useLocalStorage('wallet-publicKey', wallet.publicKey);

  // Connect to the cluster when the wallet changes
  useEffect(() => {
    if (wallet.connected) {
      wallet.connect(endpoint);
    }
  }, [wallet, endpoint]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletAdapterProvider wallets={walletAdapters} autoConnect>
        <WalletModalProvider>{/* Add WalletModalProvider for UI */}</WalletModalProvider>
        <WalletContext.Provider value={wallet}>{children}</WalletContext.Provider>
      </WalletAdapterProvider>
    </ConnectionProvider>
  );
};

// Custom hook to access the wallet
export const useWalletContext = () => useContext(WalletContext);