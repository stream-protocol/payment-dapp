import { useState, useEffect } from 'react';
import {
  useWallet,
  WalletAdapterNetwork,
  WalletError,
} from '@solana/wallet-adapter-react';
import { Connection, clusterApiUrl } from '@solana/web3.js';

// Define the network (Devnet, Testnet, or Mainnet)
const NETWORK = WalletAdapterNetwork.Devnet;

// Define the cluster API endpoint based on the selected network
const endpoint = clusterApiUrl(NETWORK);

export const useSolanaWallet = () => {
  const { wallet, select, connect, disconnect } = useWallet();
  const [connection, setConnection] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!wallet) return;

    // Create a new connection to the Solana cluster
    const connection = new Connection(endpoint, 'confirmed');
    setConnection(connection);

    // Handle wallet disconnect errors
    wallet.on(WalletError.DisconnectFailed, (error) => {
      setError(error);
    });

    return () => {
      // Cleanup when the component unmounts
      if (wallet) {
        wallet.off(WalletError.DisconnectFailed);
      }
    };
  }, [wallet]);

  const connectWallet = async () => {
    try {
      if (!wallet) {
        // If no wallet is selected, prompt the user to select one
        select(NETWORK);
      } else {
        // Connect the selected wallet
        await connect();
      }
    } catch (error) {
      setError(error);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (wallet) {
        // Disconnect the currently connected wallet
        await disconnect();
      }
    } catch (error) {
      setError(error);
    }
  };

  return {
    wallet,
    connection,
    error,
    connectWallet,
    disconnectWallet,
  };
};