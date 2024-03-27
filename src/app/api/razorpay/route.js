import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_APT_SECRET,
  });


export async function POST(req,res) {

  // const {amount}=req.body*100;
  // const amount=await req.json();
  const check=await req.json();
  const money=check.amount;
  // console.log(amount);
  const amount=money*100;
    const payment_capture = 1;
    // const amount = 1 * 100 // amount in paisa. In our case it's INR 1
    const currency = "INR";
    const options = {
        amount: (amount).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture,
        notes: {
            // These notes will be added to your transaction. So you can search it within their dashboard.
            // Also, it's included in webhooks as well. So you can automate it.
            paymentFor: "testingDemo",
            userId: "100",
            productId: 'P100'
        }
    };

    try {
      const order = await instance.orders.create(options);
  
      // Add CORS headers
      res.setHeader('Access-Control-Allow-Origin', 'https://yogdaan-charity.netlify.app/'); // Replace with your domain
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
      return NextResponse.json({ msg: "success", order });
    } catch (error) {
      // Handle errors appropriately
      return NextResponse.json({ error: error.message }, { status: 500 }); 
    }
}


// export async function POST(req) {
//   const body = await req.json();


//   return NextResponse.json({ msg: body });
// }