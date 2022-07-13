import React from 'react'
import {AiOutlineMessage} from 'react-icons/ai'


const DefaultChat = () => {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center border-[1px] border-slate-500'>

            <AiOutlineMessage className='text-8xl py-2' />
            <h2 className='text-4xl font-semibold'>Your Messages</h2>
            <p className='text-slate-600 py-2'>Send private messages and photos to friends and groups</p>

            <button className='bg-blue-600 text-white text-sm font-semibold py-2 my-4 px-6 rounded-md '>Send Message</button>

    </div>
  )
}

export default DefaultChat