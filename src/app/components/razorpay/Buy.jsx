import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const Buy = ({ makePayment, loading }) => {

  const router = useRouter();

  const handleLinkClick = (event) => {
    // ...perform any actions before the refresh
    router.reload(window.location.pathname); // Force refresh the current page
  };


  return (
    <div className="">
      <button
        onClick={() => {
          makePayment({ productId: "example_ebook" });
        }}
        disabled={loading}
        className={`bg-gradient-to-r from-zinc-700 to-gray-900 hover:from-zinc-900 hover:to-stone-900 text-white font-bold py-2 ml-25 md:ml-48 lg:ml-60 lg rounded mt-4 ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Processing...' : 'Donate Now'}
      </button>
      <button className="bg-slate-400 text-white font-bold ml-4  rounded ">
        <Link href='/donation' onClick={handleLinkClick}> Go back</Link> 
      </button>
    </div>
  );
};

export default Buy;
