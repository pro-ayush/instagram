import React from 'react'

const Contact = () => {
    return (
        <div className='flex justify-between py-2 text-xs px-6 bg-white cursor-pointer hover:bg-slate-100' >

            <div className='flex'>

                <div className='w-[60px] h-[60px] '>
                    <img className='contactImage w-[56px] h-[56px] rounded-full' src="/profiles/venom.jpg" alt="Contact" />
                    <span className='h-2 w-2 bg-green-500'></span>
                </div>

                <div className='flex flex-col justify-center items-start'>
                    <h5 className='px-2 text-lg'>Alex </h5>

                    <p className='px-2'>Hii bro</p>
                </div>
            </div>


            <div>
                <p className='py-2'>7 hrs</p>
            </div>
        </div>
    )
}

export default Contact