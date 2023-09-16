// _app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <WalletModalProvider>
        <Head>
          <title>StreamPay</title>
          <meta
            name="description"
            content="Send and Receive Digital Money Around The World. StreamPay Application helps you conveniently send and recieve money in an instant without any hassle"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <ToastContainer />
      </WalletModalProvider>
    </WalletProvider>
  );
}

export default MyApp;
