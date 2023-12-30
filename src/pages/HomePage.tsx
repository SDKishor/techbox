import React from 'react'
import { Link } from 'react-router-dom'
import CatagoryCard from '../components/CatagoryCard'

export default function HomePage() {
  return (
    <main className='flex flex-col items-center  '>
      <section className='max-w-[1280px] w-screen h-[90vh] sm:h-[80vh] xl:min-h-[700px] lg:min-h-[600px] sm:min-h-[450px] xl:max-h-[750px] lg:max-h-[650px] sm:max-h-[500px] max-h-[750px] flex  items-center relative px-10 xl:px-0'>
        <div className="w-full sm:w-7/12 flex flex-col items-center sm:items-start mb-28 sm:mb-0">
          <h1 className='font-title  text-[#17252A] pb-5 text-3xl w-10/12 text-center sm:text-left sm:w-full sm:text-4xl lg:text-5xl xl:text-6xl'>Connecting the World, One <span className='text-white'>Techbox</span> at a Time.</h1>
          <p className='font-normal text-white/85  mb-8 text-base w-10/12 text-center sm:text-left sm:text-xl sm:w-full drop-shadow-md '>With a focus on quality, reliability, and competitive pricing, we are dedicated to delivering a seamless shopping experience.</p>
          <Link className='font-title bg-[#17252A] text-white text-base px-5 py-3 rounded-md cursor-pointer xl:text-lg xl:px-7 xl:ease-outpy-5' to={"/products"}>Buy now</Link>
        </div>
        <div className='flex-1 h-full' >
          <img className='absolute right-10 xl:right-0 bottom-0 hidden sm:block h-[450px] lg:h-[600px] xl:h-[700px]'   src="./hero.png" alt="hero large" />
          <img className='absolute w-full z-[-1] right-0 bottom-0 sm:hidden opacity-80' src="./hero-m.png" alt="hero large" />
        </div>
      </section>


      <section className=' w-screen bg-[#9ADDDF] flex flex-col items-center py-10  '>
    <div className="max-w-[1280px] w-screen placeholder-gray-100 flex justify-between pb-10 px-10 xl:px-0">
      <h1 className='font-title  text-[#17252A]  text-xl text-center sm:text-left  sm:text-2xl lg:text-3xl xl:text-4xl flex-1'>Top Catagory</h1>
      <Link className='md:text-2xl underline capitalize underline-offset-8 hidden text-right sm:block flex-1' to={"/products"}>all catagories</Link>
    </div>
    <div className="max-w-[1280px] w-screen flex flex-wrap justify-between gap-5 px-10 xl:px-0">
      <CatagoryCard/>
      <CatagoryCard/>
      <CatagoryCard/>
      <CatagoryCard/>
      <CatagoryCard/>
      <CatagoryCard/>
      <CatagoryCard/>
    </div>
    <Link className='md:text-2xl underline capitalize underline-offset-8  text-right sm:hidden flex-1 mt-5' to={"/products"}>all catagories</Link>
      </section>
    </main>
  )
}
