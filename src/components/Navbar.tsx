import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiCloseFill, RiMenu4Fill } from "react-icons/ri";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    
  return (
    <nav className='max-w-[1280px] w-screen h-[100px] flex justify-between items-center  px-10 max-sm:px-5 '>
        <div className="h-[80px] max-sm:h-[60px]">
            <img className='h-full' src="./company logo.png" alt="" />
        </div>
        <ul className='text-xl uppercase font-bold text-white flex max-[790px]:text-lg max-sm:hidden'>
        
          <li className='ml-10 hover:text-[#17252a93]' >
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#17252A]" : ""}>
            Home
            </NavLink>
          </li>
          <li className='ml-10 hover:text-[#17252a93]'>
          <NavLink
            to="/Products"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#17252A]" : ""}>
            Products
            </NavLink>
          </li>
          <li className='ml-10 hover:text-[#17252a93]'>
          <NavLink
            to="/Services"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#17252A]" : ""}>
            services
            </NavLink>
          </li>
          <li className='ml-10 hover:text-[#17252a93]'>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#17252A]" : ""}>
            About
            </NavLink>
          </li>
        </ul>


        <button onClick={()=> setOpenMenu((prev)=> !prev)} className='text-4xl font-bold text-white hidden max-sm:block'><RiMenu4Fill/></button>




        <div  className={`w-full h-full fixed inset-0    ${openMenu ? "":"invisible" } ` }>
            <div  className={`absolute w-full h-full duration-500 ease-out transition-all inset-0 bg-black/30 ${openMenu?"":"opacity-0"}`} onClick={()=> setOpenMenu((prev)=> !prev)}></div>
        
            <ul className={`absolute w-8/12 h-full top-0 right-0 bg-[#31b9be] text-2xl uppercase font-bold text-white flex flex-col  items-center pt-20 max-md:text-lg min-md:hidden duration-500 ease-out transition-all ${openMenu?"":"translate-x-full"}`}>
            <button onClick={()=> setOpenMenu((prev)=> !prev)} className='text-4xl absolute right-5 top-5 '>
            <RiCloseFill />
            </button>
        <li onClick={()=> setOpenMenu((prev)=> !prev)} className='my-3 hover:text-[#17252a93]' >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#17252A]" : ""}>
          Home
          </NavLink>
        </li>
        <li onClick={()=> setOpenMenu((prev)=> !prev)} className='my-3 hover:text-[#17252a93]'>
        <NavLink
          to="/Products"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#17252A]" : ""}>
          Products
          </NavLink>
        </li>
        <li onClick={()=> setOpenMenu((prev)=> !prev)} className='my-3 hover:text-[#17252a93]'>
        <NavLink
          to="/Services"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#17252A]" : ""}>
          services
          </NavLink>
        </li>
        <li onClick={()=> setOpenMenu((prev)=> !prev)} className='my-3 hover:text-[#17252a93]'>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#17252A]" : ""}>
          About
          </NavLink>
        </li>
            </ul>
        </div>
    </nav>
  )
}
