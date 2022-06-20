import React from 'react'
import Account from './Account'

const Suggestion = () => {
  return (
    <div className='mx-24 my-4'>


        <div className='flex justify-between my-3'>
            <h2 className='text-sm font-semibold'>Suggestions for You</h2>

            <p className=' text-xs text-slate-800'>See All</p>
        </div>

        <div id='AccountSuggestions' className='flex flex-col'>
                <Account />
                <Account />
                <Account />
                <Account />
                    
        </div>



    </div>
  )
}

export default Suggestion