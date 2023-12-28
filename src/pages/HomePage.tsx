import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className='flex justify-center'>
      <section className='max-w-[1280px] w-screen h-[90vh] sm:h-[80vh] flex  items-center relative sm:mx-10 xl:mx-0'>
        <div className="w-full sm:w-7/12 flex flex-col items-center sm:items-start mb-28 sm:mb-0">
          <h1 className='font-title  text-[#17252A] pb-5 text-3xl w-10/12 text-center sm:text-left sm:w-full sm:text-4xl lg:text-5xl xl:text-6xl'>Connecting the World, One <span className='text-white'>Techbox</span> at a Time.</h1>
          <p className='font-normal text-white/85  mb-8 text-base w-10/12 text-center sm:text-left sm:text-xl sm:w-full drop-shadow-md '>With a focus on quality, reliability, and competitive pricing, we are dedicated to delivering a seamless shopping experience.</p>
          <Link className='font-title bg-[#17252A] text-white text-base px-5 py-3 rounded-md cursor-pointer xl:text-lg xl:px-7 xl:ease-outpy-5' to={"/products"}>Buy now</Link>
        </div>
        <div >
          <img className='absolute right-0 bottom-0 hidden sm:block h-[450px] lg:h-[600px] xl:h-[700px]'   src="./hero.png" alt="hero large" />
          <img className='absolute w-full z-[-1] right-0 bottom-0 sm:hidden opacity-80' src="./hero-m.png" alt="hero large" />
        </div>
      </section>
    </main>
  )
}
