import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const GallaryCard = ({name, image} : any) =>{
    return(
        <div className='overflow-hidden relative group'>
            <div className='absolute w-full h-0 group-hover:h-16 ease-in duration-300 bottom-0 bg-black/50 flex items-center'>
                <h1 className='text-xl font-bold text-white ml-5 hidden group-hover:block'>{name}</h1>
            </div>
            <img src={image} className="h-full object-cover" alt="" />
        </div>
    )
} 

const Gallary = () => {
    const router = useRouter()
    const data = [
        {
            name : "Laos",
            image : "/image/home/laos.jpg"
        },
        {
            name: "Abudhabi, Dubai",
            image: "/image/home/abudhabi.jpg"
        },
        {
            name: "Banderban, Bangladesh",
            image: "/image/home/banderban.jpg"
        },
        {
            name: "London",
            image: "/image/home/london.jpg"
        },
        {
            name: "Pagoda",
            image: "/image/home/pagoda.jpg"
        },
        {
            name: "India",
            image: "/image/home/tajmahal.jpg"
        }
    ]
  return (
    <div className='max-w-screen-xl mx-auto px-5 pb-20 md:pt-10' id="gallery">
        <h2 className='hidden md:block text-primary font-cursive text-xl md:text-center mb-5 mx-auto'>Tour Gallery</h2>
        <h1 className='text-3xl md:text-5xl text-gray-800 font-bold md:text-center'>Best Tourist&apos;s Shared Photos</h1>
        <div className='grid lg:grid-cols-3 gap-10 mt-10'>
            {
                data.map(dt => <GallaryCard key={dt.name} name={dt.name} image={dt.image} />)
            }
        </div>
        <button className='mt-10 shadow-2xl bg-primary px-7 hover:bg-white hover:text-primary hover:outline outline-primary ease-in duration-200 py-2 text-white flex justify-around text-lg gap-4 items-center mx-auto' onClick={()=>router.push('/')}>Explore More <AiOutlineArrowRight /></button>
    </div>
  )
}

export default Gallary