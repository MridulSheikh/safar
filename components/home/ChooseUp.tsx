import React from 'react'

const ChooseUp = () => {
    const data = [
        {
            title: "Exper Team Member",
            discription:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore expedita exercitationem, delectus ipsam fugit, excepturi sunt quae possimus ipsum et cum, error quasi neque beatae eaque repellendus temporibus repellat?"
        },
        {
            title: "Save Money And Time",
            discription:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore expedita exercitationem, delectus ipsam fugit, excepturi sunt quae possimus ipsum et cum, error quasi neque beatae eaque repellendus temporibus repellat?"
        },
        {
            title: "Exper Team Member",
            discription:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore expedita exercitationem, delectus ipsam fugit, excepturi sunt quae possimus ipsum et cum, error quasi neque beatae eaque repellendus temporibus repellat?"
        },
    ]
  return (
    <div className='max-w-screen-xl mx-auto grid lg:grid-cols-2 pb-20 pt-20 md:pt-32 px-5 gap-10'>
        <div className='grid grid-cols-2 gap-7'>
            <img src="/image/home/choose/hill.jpg" className='h-full object-cover' alt="" />
            <img src="/image/home/choose/jungle.jpg" className='h-full object-cover' alt="" />
        </div>
        <div>
            <h1 className='text-5xl font-semibold text-gray-700'>Every Time we Provide Best Servie</h1>
            <div>
                {
                    data.map((dt) => <div key={dt.title}  className='mt-5'>
                        <h3 className='text-2xl text-primary font-bold'>{dt.title}</h3>
                        <p className='text-lg text-gray-600 mt-2'>{dt.discription}</p>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default ChooseUp