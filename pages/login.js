import { AiFillFacebook } from 'react-icons/ai'
import React from 'react'
import Link from 'next/link'

const Login = () => {


    const LoginFooterButtons = ["Meta",
        "About",
        "Blog",
        "Jobs",
        "Help",
        "API",
        "Privacy",
        "Terms",
        "Top Accounts",
        "Hashtags",
        "Locations",
        "Instagram Lite",
        "Contact Uploading & Non-Users",
        "Dance",
        "Food & Drink",
        "Home & Garden",
        "Music",
        "Visual Arts",
    ]

    return (


        // Login Form
        <div>
            <div className='flex justify-center items-center pt-10'>


                <div className='flex justify-center items-center'>
                    <img className='w-[400px]' src={require("../resources/login_fallback.png").default.src} alt="Instagram" />
                </div>

                <div className="flex flex-col border-[1px] border-slate-300 w-[400px] h-[600px] px-10 mx-4 py-20 ">
                    <div className='flex justify-center items-center py-3'>

                        <img className='w-[150px]' src={require("../resources/logo.png").default.src} alt="Logo" />
                    </div>

                    <div className='flex flex-col'>
                        <input className='border-[1px] border-slate-300 text-[10px] p-2 mt-2' type="text" placeholder='Phone number, username or email' />

                        <input className='border-[1px] border-slate-300 text-[10px] p-2 my-2' type="text" placeholder='Password' />
                        <Link href="/" ><p className='bg-blue-500 text-center text-white py-1 my-4 text-sm font-semibold ' >Login</p></Link>


                        <p className='text-light text-center'>OR</p>


                        <div className='bg-white flex justify-center'>
                            <button className="flex items-center text-blue-500 py-3" ><AiFillFacebook className='mx-2' /> Login With Facebook</button>
                        </div>

                        <p className='text-xs text-center'>forgot password ?</p>

                        <div className='flex justify-center pt-10 '>
                            <p className='text-sm py-4'>don't have an account ? <span className=' text-blue-500'><Link href={"/register"}>
                            Sign Up
                            </Link></span></p>
                        </div>

                        <p className='text-sm text-center '>Get the App</p>

                        <div className='flex py-2 '>
                            <img className='w-[45%] px-2' src={require("../resources/appstore.png").default.src} alt="appStore" />
                            <img className='w-[45%] px-2' src={require("../resources/playstore.png").default.src} alt="playstore" />
                        </div>
                    </div>
                </div>
            </div>  

            {/* Login Footer */}

            <div className=' flex flex-col items-center justify-center text-slate-500 pt-5'>

            <div className='flex flex-wrap text-xs justify-center w-[70%] py-3'>
                    {
                        LoginFooterButtons.map((item,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <span className='px-2 py-1 font-thin'>{item}</span>
                                </React.Fragment>
                            )
                        })
                    }
                    </div>

                    <div className='flex  text-xs'>

                        <select className='mx-2' name='language' id="Language" >
                            <option value="English">English</option>
                            <option value="Spanish">espanol</option>
                        </select>

                        <p className='px-2'>© Copyright Instagram from Meta</p>
                    </div>
            </div>
        </div>
    )
}

export default Login