import React from 'react'
import { Link } from 'react-router-dom'
import CatagoryCard from '../components/CatagoryCard'
import ProductCard from '../components/ProductCard'

export default function HomePage() {
  return (
    <main className='flex flex-col items-center  '>

      {/* hero section */}
      <section className='max-w-[1280px] w-screen h-[90vh] sm:h-[80vh] xl:min-h-[700px] lg:min-h-[600px] sm:min-h-[450px] xl:max-h-[750px] lg:max-h-[650px] sm:max-h-[500px] max-h-[750px] flex  items-center relative px-5 sm:px-10 xl:px-0'>
        <div className="w-full sm:w-7/12 flex flex-col items-center sm:items-start mb-28 sm:mb-0">
          <h1 className='font-title  text-[#17252A] pb-5 text-3xl w-11/12 text-center sm:text-left sm:w-full sm:text-4xl lg:text-5xl xl:text-6xl'>Connecting the World, One <span className='text-white'>Techbox</span> at a Time.</h1>
          <p className='font-normal text-white/95  mb-8 text-base w-11/12 text-center sm:text-left sm:text-xl sm:w-full drop-shadow-md '>With a focus on quality, reliability, and competitive pricing, we are dedicated to delivering a seamless shopping experience.</p>
          <Link className='font-title bg-[#17252A] text-white text-base px-5 py-3 rounded-md cursor-pointer xl:text-lg xl:px-7 xl:ease-outpy-5' to={"/products"}>Buy now</Link>
        </div>
        <div className='flex-1 h-full' >
          <img className='absolute right-10 xl:right-0 bottom-0 hidden sm:block h-[450px] lg:h-[600px] xl:h-[700px]'   src="./hero.png" alt="hero large" />
          <img className='absolute w-full z-[-1] right-0 bottom-0 sm:hidden opacity-40' src="./hero-m.png" alt="hero mobile" />
        </div>
      </section>

      {/* catagoty section */}
      <section className=' w-screen bg-[#9ADDDF] flex flex-col items-center py-10  '>
    <div className="max-w-[1280px] w-screen placeholder-gray-100 flex justify-between pb-5 sm:pb-10 px-5 sm:px-10 xl:px-0">
      <h1 className='font-title  text-[#17252A]  text-xl text-center sm:text-left  sm:text-2xl lg:text-3xl xl:text-4xl flex-1'>Top Catagory</h1>
      <Link className='md:text-2xl underline capitalize underline-offset-8 hidden text-right sm:block flex-1' to={"/products"}>all catagories</Link>
    </div>
    <div className="max-w-[1280px] w-screen flex flex-wrap justify-between gap-5 px-5 sm:px-10 xl:px-0">
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

      {/* custom pc section */}
      <section className='max-w-[1280px] w-screen flex flex-col sm:flex-row py-12 px-5 sm:px-10 xl:px-0'>
    <div className=" sm:flex-1 flex justify-center sm:justify-start ">
      <img className='h-[350px] lg:h-[450px] xl:h-[600px]' src="./customPc.png" alt="" />
    </div>
    <div className="sm:flex-1 flex flex-col sm:justify-center items-center sm:items-start pt-10">
      <h2 className='w-full font-title  text-[#17252A] pb-5 text-2xl  text-center sm:text-left sm:w-full sm:text-3xl lg:text-4xl xl:text-5xl'>Customize Your PC, Your Way.</h2>
      <p className='font-normal text-white/95  mb-6 text-sm w-full text-center sm:text-left sm:text-lg xl:text-xl sm:w-full drop-shadow-md'>Build your dream pc your way with the help of our site. Tailor every detail to your needs – from high-performance components to personalized aesthetics. Build a computer that's uniquely yours and experience computing at its finest.</p>
      <Link className='font-title  bg-[#17252A] text-white text-base px-5 py-4 rounded-md cursor-pointer xl:text-lg xl:px-7  capitalize w-max' to={"/services"}>Build Your PC</Link>
    </div>
    
      </section>

      {/* brands section  */}
      <section className=' w-screen bg-[#9ADDDF] flex flex-col items-center py-10  '>
    <div className="max-w-[1280px] w-screen placeholder-gray-100 flex justify-between pb-5 sm:pb-10 px-10 xl:px-0">
      <h1 className='font-title  text-[#17252A]  text-xl text-center sm:text-left  sm:text-2xl lg:text-3xl xl:text-4xl flex-1 capitalize'>Top Brands</h1>
      
    </div>
    <div className="max-w-[1280px] w-screen  gap-5  px-5 sm:px-10 xl:px-0">
      <img className='m-auto' src="./brands.png" alt="" />
    </div>
    
      </section>

      {/* Featured products  */}
      <section className=' w-screen  flex flex-col items-center py-10  '>
    <div className="max-w-[1280px] w-screen placeholder-gray-100 flex justify-between pb-5 sm:pb-10 px-5 sm:px-10 xl:px-0">
      <h1 className='font-title  text-[#17252A]  text-xl text-center sm:text-left  sm:text-2xl lg:text-3xl xl:text-4xl flex-1'>Featured Product</h1>
    </div>
    <div className="max-w-[1280px] w-screen flex flex-wrap justify-between gap-5 px-5 sm:px-10 xl:px-0">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
    <Link className='md:text-2xl underline capitalize underline-offset-8  text-right  flex-1 my-10 font-title' to={"/products"}>See More</Link>
      </section>

    </main>
  )
}
