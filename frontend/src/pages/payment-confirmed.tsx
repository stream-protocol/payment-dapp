import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head'; // Import head from next/head for setting page title

export default function ThankYouPage() {
  const [redirectSeconds, setRedirectSeconds] = useState<number>(7);
  const router = useRouter();

  useEffect(() => {
    if (redirectSeconds === 0) {
      router.push('/');
      return;
    }

    const timer = setTimeout(() => {
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
    }, 1000);

    // Clear the timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, [redirectSeconds, router]);

  return (
    <div className='mx-auto px-20 text-center'>
      <Head>
        <title>Thank You for Using StreamPay</title> {/* Set page title */}
      </Head>
      <h1>Your transaction has been processed!</h1>
      <p>Thank you for using StreamPay</p>
      <Image src='/thank-you.jpg' alt='Thank you' width={500} height={500} />
      <p>
        StreamPay helps you conveniently send and receive money in an instant transaction without any hassle.
      </p>
      {redirectSeconds > 0 && (
        <p>
          You will be redirected to our homepage in {redirectSeconds} seconds. If not, you can click the button below.
        </p>
      )}
      <button
        type='button'
        onClick={() => router.push('/dashboard')}
        className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600'
      >
        ⬅️&nbsp;&nbsp; Go back home
      </button>
    </div>
  );
}