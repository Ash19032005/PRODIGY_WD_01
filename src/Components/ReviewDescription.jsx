import React from 'react'
import { star } from '../assets/icons'
const ReviewDescription = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center w-full items-center flex-col'>
       <img src={imgURL} className='rounded-full w-[120px] h-[120px] object-cover' alt='customer'/>
       <p className='max-container font-montserrat text-slate-gray mt-4 px-4 text-[16px] max-lg:text-[20px] justify-center'>{feedback}</p>
       <div className='flex justify-center items-center mt-2'>
              <img src={star} width={24} height={24} />
              <p className='text-coral-red text-[18px]'>{`(${rating})`}</p>
       </div>
       <h2 className='font-montserrat text-2xl mt-2'>{customerName}</h2>
   </div>
  )
}

export default ReviewDescription