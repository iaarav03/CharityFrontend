// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn,FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-[#2b454ff5] p-8 text-white text-center font-serif">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {/* Pages */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
        <h1 className="text-2xl hover:scale-105  ">
          <Link
           
            href="/"
          
          >
          Yogdaan
          </Link>
        </h1>
          <p className="text-left font-sans text-gray-300">
            Yogdaan cares for needy children by empowering their caregivers to do their best work, with compassion, grace, integrity, and excellence. Our end goal is to support children worldwide and see every child reach the potential that God has for them.
          </p>
          <div className="flex justify-center space-x-4 mt-4 h-7 ">
        
            <Link href="https://www.facebook.com/">
            <FaFacebookF size="100%" />
            </Link>
          
            
            <Link href="https://www.linkedin.com/">
            <FaLinkedinIn size="100%"  />
           
            
            </Link>
            <Link href="https://www.instagram.com/">
            <FaInstagram  size="100%"/>
            
            </Link>
            {/* Add other social media links */}
          </div>
        </div>

        {/* Navigation */}
        <div className=" flex flex-col">
        <div>
           <h3 className="text-2xl font-bold mb-4">Navigation</h3>  
        </div>
         <div>
<Link className="font-sans" href="/">Home</Link>
         </div>
         <div>
             <Link className="font-sans" href="/donation">Donate</Link>
            </div> 
            <div>
            <Link className="font-sans" href="/about">About</Link>
            </div>
            <div>
             <Link className="font-sans " href="/admin">Admin</Link>
            </div>
          
         
         
         
        </div>

        {/* Contact */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <h1 >Malviya Nagar,Jaipur</h1>
          <h1>Rajasthan</h1>
          <h1>+919999999999</h1>
        </div>

        {/* Support */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-bold mb-4">Support</h3>
          <p className="font-sans">Help us shape a better future for children all over the world</p>
          <div className="mt-4">
            <Link href="/donation" className="font-sans bg-slate-400 text-white px-6 py-2 bg-gradient-to-r from-zinc-700 to-gray-900 hover:from-zinc-900 hover:to-stone-900 ">Join Us Today</Link>
          </div>
        </div>
      </div>

      <hr className="my-8 border-t border-gray-600" />

      <p className="font-sans ">Copyright &copy;Yogdaan</p>
    </footer>
  );
};

export default Footer;
