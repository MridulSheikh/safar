import React from 'react'

const ServiceCountry = () => { 
    const country = ["Leabanon", "Canada", "India", "Bangladesh", "Nepal", "Laos", "Thiland", "China", "Morocco", "Indonasia", "Iceland", "Dubai", "Ukrain", "Rassia", "Israiel", "Portugal"]
  return (
    <div className='max-w-screen-xl mx-auto px-5'>
        <div className='grid grid-cols-2 md:grid-cols-8 gap-10 mt-14'>
            {
                country.map(cn => <div className='shadow-md border cursor-pointer ease-in duration-300 text-gray-600 hover:bg-primary hover:text-white flex justify-center h-20  items-center'>{cn}</div>)
            }
        </div>
    </div>
  )
}

export default ServiceCountry