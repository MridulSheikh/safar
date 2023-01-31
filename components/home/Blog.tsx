import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import {BsClock} from 'react-icons/bs'

type props = {
  title: string,
  date: string,
  comments: number,
  content: string,
  cover: string,
}

export const BlogCard = ({title, date, comments, content, cover} : props) => {
    const router = useRouter()
    return(
      <div className='shadow-md rounded-md overflow-hidden'>
        <div className='h-60 relative overflow-hidden'>
          <Image src={cover} fill className="w-full object-fill" alt="" />
        </div>
        <div className='p-7 text-center'>
          <div className='flex justify-center items-center mb-3 gap-4'>
            <div className='flex gap-2 items-center'>
              <BsClock className='text-primary' />
              <span className='text-sm text-gray-600'>{date}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <BiCommentDetail className='text-primary' />
              <span className='text-sm text-gray-600'>{comments} comments</span>
            </div>
          </div>
          <h1 className='text-xl font-bold text-gray-800'>{title}</h1>
          <p className='text-lg text-gray-500 mt-3'>{content.substring(0,100)}...</p>
          <button className='mt-5 shadow-2xl bg-primary px-7 hover:bg-white hover:text-primary hover:outline outline-primary ease-in duration-200 py-2 text-white flex justify-around text-lg gap-4 items-center mx-auto' onClick={()=>router.push('/')}>Read More <AiOutlineArrowRight /></button>
        </div>
      </div>
    )
}

const Blog = () => {
  const router = useRouter()
  const data = [
   {
    title : "Gray and Black Dslr Camera",
    date : "21 Apr 2021",
    comments : 0,
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et quam sollicitudin",
    cover : '/image/home/drslr.jpg'
   },
   {
    title : "San Francisco Bridge",
    date : "21 Apr 2021",
    comments : 0,
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et quam sollicitudin",
    cover : '/image/home/sanfasico.jpg'
   },
   {
    title : "Brown Pendant Lamp Hanging",
    date : "21 Apr 2021",
    comments : 0,
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et quam sollicitudin",
    cover : '/image/home/lamp.jpg'
   }
  ]
  return (
    <div className='max-w-screen-xl mx-auto px-5 pb-20 md:pt-10' id="blog">
        <h2 className='hidden md:block text-primary font-cursive text-xl md:text-center mb-5 mx-auto'>Latest Blog Posts</h2>
        <h1 className='text-3xl md:text-5xl text-gray-800 font-bold md:text-center'>Our Latest Article For Travellers</h1>
        <button className='mt-10 hover:underline ease-in duration-200 py-2 text-primary flex justify-around text-lg gap-4 items-center' onClick={()=>router.push('/')}>Explore More <AiOutlineArrowRight /></button>
        <div className='grid lg:grid-cols-3 gap-10 mt-5'>
            {
              data.map(dt => <BlogCard key={dt.title} title={dt.title} comments={dt.comments} content={dt.content} date={dt.date} cover={dt.cover} />)
            }
        </div>
    </div>
  )
}

export default Blog