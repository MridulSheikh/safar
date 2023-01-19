import React from 'react'
import {FaBed, FaTaxi, FaFootballBall} from 'react-icons/fa'
import {BiFoodMenu} from 'react-icons/bi'

const Offer = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-5 pb-20 md:pt-10' id="service">
        <h2 className='hidden md:block text-primary font-cursive text-xl md:text-center mb-5 mx-auto'>Services</h2>
        <h1 className='text-3xl md:text-5xl text-gray-800 font-bold md:text-center'>What We Offer For You</h1>
        <div className='grid md:grid-cols-4 gap-10 mt-10'>
          <div className='text-center border shadow-xl rounded-md'>
            <div className='py-7'>
            <div className=' bg-primary text-white text-3xl w-20 h-20 flex justify-center items-center rounded-full mx-auto'>
                <FaBed />
              </div>
            </div>
              <div className='px-6 pb-6'>
              <h1 className='text-3xl font-semibold text-gray-800'>Delux Room</h1>
              <p className='text-lg mt-5 text-gray-600'>Lorem ipsum dolor sit amet consetetur sadipscing</p>
              </div>
          </div>
          <div className='text-center border shadow-xl rounded-md'>
            <div className='py-7'>
            <div className=' bg-primary text-white text-3xl w-20 h-20 flex justify-center items-center rounded-full mx-auto'>
                <BiFoodMenu />
              </div>
            </div>
              <div className='px-6 pb-6'>
              <h1 className='text-3xl font-semibold text-gray-800'>Delicoius Food</h1>
              <p className='text-lg mt-5 text-gray-600'>Lorem ipsum dolor sit amet consetetur sadipscing</p>
              </div>
          </div>
          <div className='text-center border shadow-xl rounded-md'>
            <div className='py-7'>
            <div className=' bg-primary text-white text-3xl w-20 h-20 flex justify-center items-center rounded-full mx-auto'>
                <FaTaxi />
              </div>
            </div>
              <div className='px-6 pb-6'>
              <h1 className='text-3xl font-semibold text-gray-800'>Airport Taxi</h1>
              <p className='text-lg mt-5 text-gray-600'>Lorem ipsum dolor sit amet consetetur sadipscing</p>
              </div>
          </div>
          <div className='text-center border shadow-xl rounded-md'>
            <div className='py-7'>
            <div className=' bg-primary text-white text-3xl w-20 h-20 flex justify-center items-center rounded-full mx-auto'>
                <FaFootballBall />
              </div>
            </div>
              <div className='px-6 pb-6'>
              <h1 className='text-3xl font-semibold text-gray-800'>Game Room</h1>
              <p className='text-lg mt-5 text-gray-600'>Lorem ipsum dolor sit amet consetetur sadipscing</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Offer