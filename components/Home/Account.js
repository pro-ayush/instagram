import React from 'react'

const Account = () => {
    return (
        <div className='flex justify-between items-center my-2'>

            <div id="flexbox" className='flex'>

                <div>
                    <img className='w-[40px] h-[40px] rounded-full' src="/profiles/deepika.jpg" alt="Deepika" />
                </div>

                <div className='flex flex-col justify-center items-start mx-3'>
                    <p className='text-xs'>Deepika</p>
                    <p className='text-xs'>deepika.padukon</p>
                </div>
            </div>

            <div>
                <button className='text-blue-500'>Follow</button>
            </div>
        </div>
    )
}

export default Account