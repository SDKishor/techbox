import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className='bg-[#9ADDDF] flex flex-col items-center w-screen'>
        <div className="max-w-[1280px] w-screen my-10 flex flex-col items-center">
            <p className='uppercase text-center text-2xl '>UPGRADE FOR A BETTER FUTURE</p>
            <h2 className='text-center font-title text-5xl py-5'>Request More Information</h2>
            <p className='text-center text-xl'>TechBox, help to build your dream pc here which is developing a unique.</p>
            <Link className='font-title  bg-[#17252A] text-white text-base px-5 py-4 rounded-md cursor-pointer xl:text-lg xl:px-7  capitalize w-max my-5' to={"/contact"}>Contact Us</Link>
            <p className='text-center  text-xl'>© 2019 Techbox</p>
        </div>
        <div className="max-w-[1280px] w-screen  flex justify-between items-center border-t border-[#17252A] py-5 ">
            <div className="flex-1">
                <img src="./company logo.png" alt="" />
            </div>
            <div className="">
                <Link className='mx-3 text-xl' to={"/about"}>Teams</Link>
                <Link className='mx-3 text-xl' to={"/about"}>Report</Link>
                <Link className='mx-3 text-xl' to={"/about"}>About</Link>
            </div>
            <div className="flex-1 flex justify-end ">
                <Link className='w-12 h-12 border-[#17252A] border flex justify-center items-center rounded-full text-xl mx-3' to={"www.facebook.com"}> <FaFacebookF/></Link>
                <Link className='w-12 h-12 border-[#17252A] border flex justify-center items-center rounded-full text-xl mx-3' to={"www.facebook.com"}> <FaYoutube /></Link>
                <Link className='w-12 h-12 border-[#17252A] border flex justify-center items-center rounded-full text-xl mx-3' to={"www.facebook.com"}> <FaLinkedinIn /></Link>
            </div>
        </div>
    </footer>
  )
}
