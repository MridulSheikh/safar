import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const PopularPlaceCard = ({img, place, price} : any) => {
    return(
        <div className='overflow-hidden shadow-2xl rounded-md cursor-pointer'>
            <div className='h-50 overflow-hidden'>
                <img src={img} className="object-cover" alt="" />
            </div>
            <div className='p-5 text-center'>
                <span className='text-xl text-white font-semibold bg-primary px-3 py-1 rounded-full'>${price}</span>
                <p className='text-gray-600 text-xl font-bold mt-2'>{place}</p>
            </div>
        </div>
    )
}

const PopularPlace = () => {
  const router = useRouter()
  return (
    <div className='pb-20 md:pt-10 max-w-screen-xl mx-auto px-5' id="popular">
        <h2 className='hidden md:block text-primary font-cursive text-xl text-center mb-5 mx-auto'>Popular Distination</h2>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-700 md:text-center md:w-3/5 mx-auto'>Travel Most Popular Place In The World</h1>
        <div className='grid md:grid-cols-3 gap-7 mt-10'>
            <PopularPlaceCard img="/image/place/portugal/portugal.jpg" place="Portugal, Portugal" price={300} />
            <PopularPlaceCard img="/image/place/japan/japan.jpg" place="Japan, Japan" price={300} />
            <PopularPlaceCard img="/image/place/thiland/thiland.jpg" place="Thiland, Thiland" price={300} />
        </div>
        <button className='mt-20 shadow-2xl bg-primary px-7 hover:bg-white hover:text-primary hover:outline outline-primary ease-in duration-200 py-2 text-white flex justify-around text-lg gap-4 items-center mx-auto' onClick={()=>router.push('/')}>Explore More <AiOutlineArrowRight /></button>
    </div>
  )
}

export default PopularPlace