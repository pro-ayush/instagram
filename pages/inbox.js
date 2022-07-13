import React from 'react'

import contactList from '../components/Inbox/contactList'

// Components 
import DefaultChat from '../components/Inbox/defaultChat'
import Navbar from "../components/Home/Navbar"
import Contact from '../components/Inbox/contact'

// importing Icons 
import {AiFillCaretDown} from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'
import Chat from '../components/Inbox/Chat/Chat'



const Inbox = () => {


  return (
    <div className=''>
            
            <nav>
                    <Navbar />
            </nav>
        
        <div className='flex justify-center h-[90vh] py-6'>


            <div className='flex w-[70%]'>


                    <div id='Contacts' className='w-[40%] overflow-y-scroll   border-[1px] border-slate-500'>
                        <div className='h-[60px] flex justify-between items-center px-6'>
                            <div className='flex items-center justify-center'>

                            <h2 className='text-xl'>ayushmaan.bakshi </h2><span><AiFillCaretDown className='' /></span>
                            </div>

                                <div>
                                        <BsPencilSquare className='text-2xl' />
                                </div>
                        </div>
                            <div className=''>

                                        {
                                            contactList.map((item,index)=>{
                                                return (
                                                    <React.Fragment key={index}>
                                                        <Contact name={item.name} profileImage={item.profileImage} lastmsg={item.lastmsg} time={item.time} />
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                            </div>
                    </div>


                    <div id="Chat" className='w-[60%] '>
                            {/* <DefaultChat /> */}
                            <Chat />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Inbox