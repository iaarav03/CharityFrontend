'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id:1,
           title:"Home",
           link:"/"
        },
        {
            id:2,
            title:"About",
            link:"/about"
         },
         {
            id:3,
            title:"Donation",
            link:"/donation"
         }
        //  },
        //  {
        //   id:4,
        //   title:"Admin",
        //   link:"/register"
        //  }
      ];
      

  return (
    <div className=" z-20 fixed flex justify-between items-center w-full h-20 px-4 text-black bg-white  nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-4xl font-semibold text-[#221d62] hover:scale-105 hover:text-[#4e3064] ml-2">
          <Link
            className="link-underline link-underline-black"
            href="/"
          
          >
          Yogdaan
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id,title, link }) => (
          <li
            key={id}
            className="nav-links px-4 text-xl cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-blue-800 duration-200 link-underline"
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="z-40 flex flex-col   justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, title,link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
};

export default Navbar;