"use client";
import React, { Suspense, useState } from "react";
import Buy from "./Buy";
import { useRouter } from 'next/navigation';
import Loading from "../../../../loading";
import axios from 'axios';
import styles from './Buy.module.css';

const BuyProduct = ({amount}) => {
  
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const makePayment = async ({ productId = null }) => {
    // Set loading to true to display loading indicator
    setLoading(true);
    
    try {
      // Make API call using Axios
      const response = await axios.post("api/razorpay", {
        amount: amount
      });

      const { order } = response.data;
   
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Razorpay public key
        name: "Aarav", // Name of the merchant or company
        currency: order.currency, // Currency code (e.g., INR, USD)
        amount: order.amount, // Amount in the smallest currency unit (e.g., paise for INR)
        order_id: order.id, // Order ID received from the server
        description: "Understanding RazorPay Integration", // Description of the transaction
        handler: async function (response) {
          console.log(response); // Handler function to handle successful payment response
        },
        prefill: {
          name: "Aarav", // Name of the customer prefilled in the checkout form
          // Add more prefill details if needed, like email, contact, etc.
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      paymentObject.on("payment.failed", function (response) {
        alert("Payment failed. Please try again. Contact support for help");
      });

    } catch (error) {
      console.error("Error making payment:", error);
      // Handle error, maybe display an error message to the user
    } finally {
      // Set loading to false after API call is completed (whether successful or failed)
      setLoading(false);
    }
  };

  return (
    <>
      {/* Display loading indicator while loading is true */}
      {loading &&   <div className={styles.loader}></div>}
      
      <Suspense fallback={<Loading />}>
        <Buy makePayment={makePayment} loading={loading} />
      </Suspense>
    </>
  );
};

export default BuyProduct;
