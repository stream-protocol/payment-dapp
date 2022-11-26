import Head from 'next/head'
import Image from 'next/image'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: React.FC = () =>  {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>StreamPay - Cross-Border Payments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Feature />

      <Footer />


    </div>
  )
}

export default Home