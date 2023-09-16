import React, { useState } from "react";
import { useRouter } from 'next/router';

export default function Products({ submitTarget }) {
  const [number, setNumber] = useState(0);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate inputs
    if (!address.trim()) {
      setError("Please enter a valid USDC address.");
      return;
    }

    if (isNaN(number) || number <= 0) {
      setError("Please enter a valid positive number.");
      return;
    }

    // Clear any previous errors
    setError("");

    // Redirect to the send page with query parameters
    router.push(`/send/?amount=${number}&address=${address}`);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 mx-12 w-1/3">
      <p className="pb-1">To send funds, please enter your recipient USDC address</p>
      <div className='flex flex-col py-3'>
        <div className="mt-1">
          <label className="block text-gray-700 text-lg font-bold pr-5">Recipient USDC Address:</label>
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 mt-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="USDC address"
          />
          <br />
          <label className="block text-gray-700 text-lg font-bold mb-2">Amount to Send (USDC):</label>
          <input
            type="number"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value, 10))}
            min={1}
            className="shadow appearance-none border rounded w-12 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-5"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="items-center px-20 rounded-md py-2 max-w-fit bg-gray-900 text-white hover:scale-105 disabled:opacity-50"
          disabled={!address || isNaN(number) || number <= 0}
        >
          Send
        </button>
      </div>
    </form>
  )
}