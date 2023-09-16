import Head from 'next/head';
import Image from 'next/image';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>StreamPay - Cross-Border Payments</title>
        <meta name="description" content="StreamPay - Cross-Border Payments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header with logo and subtitle */}
      <header className="py-4 px-8 text-white">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/assets/logo-light.svg"
              alt="StreamPay Logo"
              width={48}
              height={48}
            />
            <h2 className="text-xl font-bold ml-2">StreamPay</h2>
          </div>
          <p className="text-sm">Cross-Border Payments Made Easy</p>
        </div>
      </header>

      {/* Main content */}
      <main>
        <Hero />
        <Feature />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
