import React from 'react'

export default function ProductCard() {
  return (
    <div className='w-[155px] sm:w-[210px] lg:w-[300px] px-3 py-5 bg-[#9ADDDF] rounded-lg'>
        <div className=" border-[#17252A] border w-full sm:h-[200px] lg:h-[280px] rounded-sm flex justify-center items-center">
            <img className='h-full w-auto' src="./productDemo.png" alt="" />
        </div>
        <div className="pt-3 lg:pt-5">
            <h3 className='font-title text-[#17252A] w-full text-center pb-2  xl:text-xl text-sm '>MotherBord</h3>
            <p className='font-normal text-[#17252A] w-full text-center pb-2 text-xs sm:text-sm xl:text-lg'>Msi b450 Gaming carbon wifi motherboard</p>
            <h3 className='font-title text-[#17252A] w-full text-center pb-2 text-sm xl:text-xl'>TK. 12,500</h3>
        </div>
    </div>
  )
}
