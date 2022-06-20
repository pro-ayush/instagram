
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {IoIosShareAlt} from 'react-icons/io'
import {BsBookmark} from 'react-icons/bs'


import {BsFillEmojiSmileFill} from 'react-icons/bs'

const Post = () => {
    return (
        <div className='flex flex-col my-8  border-[1px] border-slate-500'>


            {/* Head */}
            <div className='flex justify-between items-center py-2 mx-2'>

                <div className='flex items-center'>

                    <img className=' w-[40px] h-[40px] rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1' src="/profiles/deepika.jpg" alt="Profile" />

                    <p className='px-2 text-sm'>Wealth</p>
                </div>


                <BsThreeDots />


            </div>

            {/* Post Image  */}

            <div className='w-full h-full'>
                <img className='w-full h-full' src={"/profiles/therock.jpg"} alt="Post" />
            </div>

            {/* like share etc */}
            <div className='flex text-2xl justify-between items-center py-2'>
                <div className='flex text-3xl items-center'>
                    <AiOutlineHeart className='mx-2' />
                    <AiOutlineMessage className='mx-2' />
                    <IoIosShareAlt className='mx-2' />
                </div>

                <BsBookmark className='mx-2' />
            </div>


            {/* Comments  */}

                <div className='flex flex-col px-3 py-2'>
                <p className='text-sm'>24,542 likes</p>

                <p className='text-xs '><strong>Wealth</strong> Don’t settle for being average unless you want an average life!</p>

                <p className='text-sm'>view all 593 comments</p>
                <p className='text-xs'>3 Hours ago</p>

                </div>


            {/* Comment BOx */}

            <div className='flex justify-between items-center text-xs py-2 px-2 border-[1px] border-slate-500'>
                    <div className='flex items-center'>
                        <BsFillEmojiSmileFill className='mx-2 text-2xl ' />
                        <input className='text-xs' placeholder='Add a comment' type="text" />
                    </div>

                    <div>
                        <button className='text-blue-600 '>
                            Post
                        </button>
                    </div>
            </div>

        </div>
    )
}

export default Post