import React, {useEffect, useState} from 'react'
import Link from 'next/link'


import {AiFillFacebook} from 'react-icons/ai'



const Register = () => {

    const [dataFilled, setDataFilled] = useState(false);


    const dataFilledHandler = () => {
            setDataFilled(true);
    }

  return (
    <div className='bg-white flex justify-center '>


        <div id="Container" className='border-[1px] border-gray-300 w-[500px] my-[100px] p-10 flex flex-col items-center justify-center'>
            

            <img className='w-[250px]' src={"https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"} alt="logo" />


            <div>
                <p className='w-[30ch] text-center my-4'>
                    Sign up to see photos and videos from your friends
                </p>
            </div>

            <button className='bg-blue-600 text-white flex p-3 rounded-xl my-4'><AiFillFacebook className='text-2xl mr-2' />
            Login with Facebook</button>

            <p className='text-bold text-sm'>OR</p>

            <div className='flex flex-col'>
                    <input type="text" placeholder='Mobile Number or Email' />
                    <input type="text" placeholder='Full Name' />
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
            </div>

            <p className='text-slate-600 text-xs my-4 text-center'>People who use our service may have uploaded your contact information to Instagram. <span className='text-slate-800'>Learn More</span></p>

            <p className='text-xs text-center w-[40ch] text-slate-500'>By Signing up , you agreee to our Terms , Data Policy and Cookies Policy</p>

            <button className={`${ dataFilled ? "opacity-100" : "opacity-50"}  w-[250px] my-4 rounded-xl p-2 text-white font-bold bg-blue-600`}>Sign Up</button>

            

            <div id='loginDiv' className='my-6'>
                    <p className='text-sm'>Have an account ? <span className='text-blue-600'><Link href="/login">  Login</Link></span></p>
            </div>
        </div>


        <style jsx>
            {
                `
                    input {
                        width : 350px;
                        border : 1px solid #9E9E9E;
                        padding : 6px 10px;
                        margin : 10px 0px;
                        font-size : 14px;
                        border-radius : 5px;
                    }
                `
            }

        </style>


    </div>
  )
}

export default Register