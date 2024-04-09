import React from 'react'
import Navbar from '../static/Navbar'

export default function Hero() {
  return (
    <div className="bg-primary_blue">
      <Navbar />
      <div className=" px-8 py-10 items-center  grid-cols-2 grid transform  origin-bottom-right">

        <div className="px-16">
          <div>
            <h1 className="text-6xl leading-tight font-extrabold tracking-tight mb-8 text-white">Meet Your All·in·One Creator Store</h1>
          </div>
          <div className=" mb-10">
            <span className="w-70 text-lg leading-relaxed font-normal text-white opacity-60">Stan is the <span className="italic"> easiest way to make money online. All of your courses, digital products, and bookings are now hosted in your link·in·bio.</span>
            </span>
          </div>
          <button className="text-primary_text py-3 px-6 bg-primary_green rounded-full text-2xl font-extrabold tracking-normal m-0">Continue</button>

        </div>
        <div className="flex justify-end">
          <div className=" w-[500px] max-w-750 aspect-w-11 flex justify-end  z-10">
            <img src="heroImg.png" className="" />
          </div>

        </div>

      </div>
    </div>
  )
}
