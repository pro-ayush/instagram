import React from 'react'
const SimpleMessage = () => {
  return (

    <div className='messageContainer'>

    <div    className='Message flex  justify- py-1 my-2 mx-[10px] max-w-[50%] flex-wrap text-white bg-slate-900'>

      <style jsx>
        {
          ` 
              .Message {
                border-radius : 50px 20px 20px 0px;
              }
          `
        }
      </style>
      
        <p>Hello</p>
    </div>

    </div>

  )
}

export default SimpleMessage