import React from 'react'
import {GrCircleInformation} from 'react-icons/gr';
import {BsFillEmojiHeartEyesFill} from 'react-icons/bs'
import {RiGalleryFill} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import SimpleMessage from './SimpleMessage';

const Chat = () => {
  return (
    <div>

      {/* Head of Chat */}
      <div id="headChat" className='flex justify-between px-10 h-[50px] border-[1px] border-slate-400'>

        <div className='flex items-center'>
          <img className='rounded-full w-[40px] h-[40px]' src="/profiles/venom.jpg" alt="Profile" />

          <h6 className='mx-5 font-semibold'>Venom</h6>
        </div>

        <div className='text-2xl flex items-center'>
          <GrCircleInformation /> 
        </div>
      </div>

      {/* BOdy of Chat */}

        <div className='flex flex-col w-full h-[520px] bg-red-100 overflow-y-scroll'>
            
              <SimpleMessage />
              <SimpleMessage />
              <SimpleMessage />
              <SimpleMessage />
              <SimpleMessage />
        </div>



      {
        // Message Box 
      }

      <div className='border-[1px] border-slate-500 h-[50px] '>
        <div className='flex justify-between px-4 items-center'>

          <div className='flex text-3xl items-center'>

            <BsFillEmojiHeartEyesFill className='mx-2' />    
            <input placeholder='Message...' className='text-sm py-3 w-[50ch] active:border-0 outline-none' type="text" />
          </div>


            <div className='flex text-3xl items-center'>

            <RiGalleryFill className='mx-2' />
            <AiOutlineHeart className='mx-2' />
            </div>

        </div>
      </div>

    </div>
  )
}

export default Chat