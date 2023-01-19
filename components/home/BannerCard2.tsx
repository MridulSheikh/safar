import { useRouter } from 'next/router'
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const BannerCard2 = () => {
    const router = useRouter()
  return (
    <div className={`bg-[url('/image/home/banner/banner3.jpg')] bg-cover bg-center bg-no-repeat`}>
        <div className=' bg-gradient-to-tl to-slate-900/50 from-slate-900/50'>
        <div className='max-w-screen-md px-5 mx-auto pb-40 pt-60 text-white text-center'>
            <h2 className='text-primary text-2xl'>wellcome to safar</h2>
            <h1 className='text-3xl md:text-5xl font-semibold mx-auto my-5'>Visite Your Beutiful Place <br /> With us</h1>
            <p className='w-8/12 mx-auto text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>
            <button className='mt-7 bg-primary px-7 hover:bg-white hover:text-primary hover:outline outline-primary ease-in duration-200 py-2 text-white flex justify-around text-lg gap-4 items-center mx-auto' onClick={()=>router.push('/')}>Explore <AiOutlineArrowRight /></button>
        </div>
        </div>
    </div>
  )
}

export default BannerCard2