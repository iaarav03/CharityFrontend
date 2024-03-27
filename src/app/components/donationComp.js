"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import BuyProduct from './razorpay/BuyProduct';
import { FaRupeeSign } from 'react-icons/fa';

const DonationForm = () => {
    const router = useRouter();
    const [donationAmount, setDonationAmount] = useState(null);
    const [error, setError] = useState(null);
    
    const handleSub = () => {
        router.push("/register");
    }
    const fetchData = async (values) => {
        try {
          toast.info('Saving info...', { autoClose: false });
    
          const response = await axios.post('https://charityserver-1.onrender.com/donation', values);
           
          
          toast.dismiss(); 
    
          if (response.status===400) {
            toast.error('Please try again later');
    
          }else {
            toast.success('Yogdaan Welcomes you');
    
            
    
    
          
          }
        } catch (error) {
          handleAxiosError(error); 
        }
      };

    const formik = useFormik({
        initialValues: {
            name: '',
            amount: '',
            note: '', // Added note field to initial values
        },
        validate: (values) => {
            const errors = {};
      
            if (!values.name) {
              errors.name = 'Username is required';
            }
            if (!values.amount) {
              errors.amount = 'Amount is required';
            }
            
            if (!values.note) {
              errors.note = 'Description is required';
            }
      
            return errors;
          },
        onSubmit: values => {
            // Handle the form submission logic here
            fetchData(values);
            setDonationAmount(values.amount); // Set donation amount
        },
    });

    return (
        <div className=" h-[80vh] flex items-center justify-center  ">
            {donationAmount ? (
                <BuyProduct amount={donationAmount} />
            ) : (
                <form onSubmit={formik.handleSubmit} className=" rounded-lg shadow-md w-96 md:h-[50vh] md:mb-16 md:w-[50vw]">
                    <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>

                    {/* Name input field */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 w-full border rounded-md"
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-red-500">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    {/* Amount input field */}
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Donation Amount</label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm"><FaRupeeSign/></span>
                            </div>
                            <input
                                type="text"
                                id="amount"
                                name="amount"
                                className="pl-7 pr-2 py-2 w-full border rounded-md"
                                {...formik.getFieldProps('amount')}
                            />
                            {formik.touched.amount && formik.errors.amount ? (
                                <div className="text-red-500">{formik.errors.amount}</div>
                            ) : null}
                        </div>
                    </div>

                    {/* Note input field */}
                    <div className="mb-4">
                        <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note</label>
                        <input
                            type="text"
                            id="note"
                            name="note"
                            className="mt-1 p-2 w-full border rounded-md"
                            {...formik.getFieldProps('note')}
                        />
                        {formik.touched.note && formik.errors.note ? (
                            <div className="text-red-500">{formik.errors.note}</div>
                        ) : null}
                    </div>

                    {/* Donation button */}
                    <button  type="submit" className="bg-black text-white  px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:border-gray-500">
                        <span className="flex items-center">
                         <FaRupeeSign className='pr-2'/>
                            Donate
                        </span>
                    </button>
                   
                </form>
                
            )}
            {error && <p className="text-red-500">{error}</p>}
            <ToastContainer />
        </div>

    );
};

export default DonationForm;
