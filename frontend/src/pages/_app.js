import '../styles/globals.css';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  CoinbaseWalletAdapter,
  GlowWalletAdapter,
} from '@solana/wallet-adapter-wallets';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

function MyApp({ Component, pageProps }) {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = clusterApiUrl(network);

  // Configure the available wallet adapters
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter({ network }),
    new CoinbaseWalletAdapter(),
    new GlowWalletAdapter(),
  ];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default StreamPayApp;
