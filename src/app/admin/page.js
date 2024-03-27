'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaList, FaStar, FaUser, FaMoneyBillWaveAlt, FaStickyNote, FaRupeeSign } from 'react-icons/fa';
import { AiTwotoneSmile } from 'react-icons/ai';

const Page = () => {
  const [donations, setDonations] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const entriesPerPage = 10; // Number of entries per page

  const fetchDonations = async () => {
    try {
      const response = await axios.get('https://charityserver-1.onrender.com/getdonation');
      const { success, donations } = response.data;
      if (success) {
        setDonations(donations);
        const amountArray = donations.map(donation => parseFloat(donation.amount));
        const totalAmount = amountArray.reduce((acc, curr) => acc + curr, 0);
        setTotalAmount(totalAmount);
        setTotalEntries(donations.length);
      }
    } catch (error) {
      console.error('Error fetching donations:', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  // Calculate index range for current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = donations.slice(indexOfFirstEntry, indexOfLastEntry);

  const averageRating = 4.6; // For demonstration purposes

  // Total number of pages
  const totalPages = Math.ceil(donations.length / entriesPerPage);

  return (
    <div className='pt-20 h-fit bg-white'>
      <div className='flex items-center pt-5 pl-20'>
        <AiTwotoneSmile className='text-xl mr-2 text-gray-500' />
        <h1 className='text-4xl text-black'>Overview</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-10'>
        <div className='p-5 rounded-lg shadow-lg bg-gradient-to-r from-yellow-200 to-yellow-400'>
          <div className='flex items-center justify-center text-5xl text-yellow-800'>
            <FaRupeeSign />
          </div>
          <div className='text-center mt-2'>
            <h2 className='text-2xl font-semibold text-black'>Total Amount</h2>
            <p className='text-xl text-black'>{totalAmount}</p>
          </div>
        </div>
        <div className='p-5 rounded-lg shadow-lg bg-gradient-to-r from-blue-200 to-blue-400'>
          <div className='flex items-center justify-center text-5xl text-blue-800'>
            <FaList />
          </div>
          <div className='text-center mt-2'>
            <h2 className='text-2xl font-semibold text-black'>Total Entries</h2>
            <p className='text-xl text-black'>{totalEntries}</p>
          </div>
        </div>
        <div className='p-5 rounded-lg shadow-lg bg-gradient-to-r from-yellow-200 to-yellow-400'>
          <div className='flex items-center justify-center text-5xl text-yellow-800'>
            <FaStar />
          </div>
          <div className='text-center mt-2'>
            <h2 className='text-2xl font-semibold text-black'>Average Rating</h2>
            <p className='text-xl text-black'>{averageRating}</p>
          </div>
        </div>
      </div>

      {/* Conditional rendering for loading shimmer */}
      {loading ? (
        <div className="container mx-auto mt-10 p-5">
          <div className="animate-pulse space-y-4">
            <div className="bg-gray-200 rounded-md h-8"></div>
            <div className="bg-gray-200 rounded-md h-8"></div>
            <div className="bg-gray-200 rounded-md h-8"></div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-10 p-5">
          <h2 className="text-2xl font-semibold text-center mb-5 text-black">List of Donations</h2>
          <div className="grid grid-cols-1">
            {currentEntries.map((donation, index) => (
              <div key={index} className=" p-4 rounded-md shadow-md mb-4">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/4 mb-2 sm:mb-0">
                    <p className="font-semibold text-green-600">{donation.name}</p>
                  </div>
                  <div className="w-full sm:w-1/4 mb-2 sm:mb-0 ">
                    <FaRupeeSign className='text-black' />
                    <p className="text-sm text-gray-600">{donation.amount}</p>
                  </div>
                  <div className="w-full sm:w-1/4 mb-2 sm:mb-0">
                    <p className="font-semibold text-teal-600">{new Date(donation.date).toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: true // Use 12-hour time format
                    })}</p>
                  </div>
                  <div className="w-full sm:w-1/4 mb-2 sm:mb-0">
                    <p className="font-semibold text-sky-600">{donation.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-5">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-2 rounded-tr  mx-1 text-white ${
                  currentPage === i + 1 ? 'bg-gray-700' : 'bg-gray-800 hover:scale-105'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
