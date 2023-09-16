import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ThankYouPage() {
  const [redirectSeconds, setRedirectSeconds] = useState(7);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (redirectSeconds === 1) {
        router.push('/');
      } else {
        setRedirectSeconds(redirectSeconds - 1);
      }
    }, 1000);

    // Clear the timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, [redirectSeconds, router]);

  return (
    <div className="mx-auto px-20 h-screen flex flex-col items-center justify-center">
      <h1>Your transaction has been processed!</h1>
      <p>Thank you so much for using StreamPay</p>
      <Image src="/thank-you.jpg" alt="thank you" width={500} height={500} />
      <p>You will be redirected to the home page in {redirectSeconds} seconds</p>
      <button
        type="button"
        onClick={() => router.push('/dashboard')}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ⬅️&nbsp;&nbsp; Go back home
      </button>
    </div>
  );
}
