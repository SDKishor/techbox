import React from 'react'

export default function CatagoryCard() {
  return (
    <div className='w-[80px] sm:w-[120px] flex flex-col items-center mx-auto py-2' >
        <div className="w-full">
            <img src="/laptop.png" alt="" />
        </div>
        <h3 className='font-title text-sm sm:text-xl pt-3 '>Laptop</h3>
    </div>
  )
}
