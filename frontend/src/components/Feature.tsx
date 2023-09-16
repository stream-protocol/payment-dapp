import React from "react";

const Feature: React.FC = () => {
  return (
    <section className="relative w-full">
      <div className="absolute w-full bg-gradient-to-b from-gray-100 to-white" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:py-12 md:py-16 md:px-10">
        <div className="py-8 flex grid grid-cols-12 gap-10 pb-10 sm:mt-16">
          {renderFeature(
            'Send Money',
            'Sending money to a friend, StreamPay makes it Safe, Secure and Fast Transfers',
            'https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg',
            'INSTANTLY',
            'text-blue-500',
            'bg-blue-950'
          )}
          {renderFeature(
            'Recieve Funds',
            'Accept alternative payments. Accept local payment methods around the world.',
            'https://cdn.devdojo.com/images/may2021/orange.jpg',
            'No Hassles',
            'text-blue-500',
            'bg-blue-600'
          )}
          {renderFeature(
            'Pay With StreamPay',
            'Seamless integration with your Solana wallets and assets',
            'https://cdn.devdojo.com/images/may2021/gbc.jpg',
            'Seamless',
            'text-yellow-400',
            'bg-yellow-400'
          )}
        </div>
      </div>
    </section>
  );
};

const renderFeature = (
  title: string,
  description: string,
  imageUrl: string,
  label: string,
  labelTextColor: string,
  bgColor: string
) => (
  <div className="group relative col-span-12 flex h-full flex-col items-start justify-end overflow-hidden rounded-xl md:col-span-6 xl:col-span-4">
    <div
      className="block h-96 w-full transform bg-cover bg-center transition duration-300 ease-in-out hover:scale-110"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className={`relative z-20 h-auto w-full border-t-0 ${bgColor} py-8 px-7 text-white`}>
      <div className={`absolute top-0 -mt-3.5 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase ${labelTextColor}`}>
        {label}
      </div>
      <h2 className="mb-5 text-5xl font-bold">{title}</h2>
      <p className="mb-2 text-lg font-normal opacity-100">{description}</p>
    </div>
  </div>
);

export default Feature;
