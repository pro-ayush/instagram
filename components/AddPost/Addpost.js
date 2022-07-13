import React from 'react'
import {MdPhotoLibrary} from 'react-icons/md'

const Addpost = () => {
  return (
    <div>
        
        <div className=''>
            <h6>Create New Post</h6> 
        </div>


        <div className='flex flex-col justify-center items-center'>

            <MdPhotoLibrary />

            <h3>Drag photos and Videos here</h3>
            <button>select from Computer</button>
        </div>gdft
    </div>
  )
}

export default Addpost