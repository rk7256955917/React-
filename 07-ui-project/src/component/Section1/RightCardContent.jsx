import React from 'react'

const RightCardContent = (props) => {
  return (
       <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
        <div>
            <p className='text-xl px-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, facere, repellat labore voluptatibus nostrum distinctio in temporibus, amet obcaecati animi ipsa laudantium beatae ex minima dolorem quidem. Expedita, inventore doloremque?</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-7 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-7 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  ) 
}

export default RightCardContent
