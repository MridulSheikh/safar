import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const ServiceNav = () => {
    const router = useRouter()
  return (
    <div className='py-2 shadow-md sticky top-0 bg-white'>
        <div className='max-w-screen-xl mx-auto px-5 flex justify-between items-center'>
            <h1 onClick={()=>router.push('/')} className='text-primary text-2xl font-bold hidden md:flex'>SAFAR</h1>
            <div className='rounded-full border border-primary overflow-hidden flex items-center w-80 '>
                <input type="text" className='px-5 h-full outline-none w-full' placeholder='search' />
                <button className='bg-primary text-white text-xl p-2 rounded-full'><AiOutlineSearch /></button>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default ServiceNav