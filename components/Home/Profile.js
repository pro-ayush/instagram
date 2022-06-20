import React from 'react'

const Profile = () => {
    return (
        <div className='flex items-center justify-between px-24'>


            <div className='flex items-center'>

                <div className=''>
                    <img className='w-[56px] h-[56px] rounded-full' src="/profiles/samantha.jpg" alt="Profile" />
                </div>

                <div className='flex flex-col items-start px-2  '>
                    <p className='text-xs'>samantha</p>
                    <p className='text-xs'>Samantha Official</p>
                </div>
            </div>

            <div className='flex items-center text-sm text-blue-500 font-semibold'>
                <p>Switch</p>
            </div>
        </div>
    )
}

export default Profile