import Link from 'next/link'

import { AiOutlineCloseCircle, AiOutlineHeart } from 'react-icons/ai'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { BsSearch, BsHouseFill, BsMessenger, BsFillCompassFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='flex  justify-center h-[10vh] bg-white border-b-[1px] border-slate-600'>

            <style jsx>
                {
                    `
                            #SearchIcon {
                                border-radius : 10px 0px 0px 10px;
                            }

                            #SearchClose {
                                border-radius : 0px 10px 10px 0px;
                            }
                        `
                }
            </style>



            <div className='flex items-center justify-between w-[70%]'>
                <div id="logo" >
                    <img className='w-[120px]' src={require("../../resources/logo.png").default.src} alt="" />
                </div>

                <div className='flex items-center'>
                    <span id="SearchIcon" className='bg-slate-200 p-3'><BsSearch /></span>
                    <input className='bg-slate-200 p-3 px-2 text-xs w-[300px] active:border-0 outline-none' type="text" placeholder='Search' />
                    <span id="SearchClose" className='bg-slate-200 p-3'><AiOutlineCloseCircle /></span>
                </div>

                <div className='flex text-2xl'>
                    <Link href="/"><BsHouseFill className='mx-2 cursor-pointer' /></Link>
                    <Link href="/inbox"><BsMessenger className='mx-2 cursor-pointer' /></Link>
                    <Link href="/AddPost"><BiMessageSquareAdd className='mx-2 cursor-pointer' /></Link>
                    <Link href="/Trending"><BsFillCompassFill className='mx-2 cursor-pointer' /></Link>
                    <Link href="/Notifications"><AiOutlineHeart className='mx-2 cursor-pointer' /></Link>

                    {/* Profile Button */}
                    <Link href={"/profile"}><img className='w-[2rem] h-[2rem] rounded-full cursor-pointer' src={require("../../resources/girl.jpg").default.src} alt="Profile" /></Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar