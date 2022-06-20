import React from 'react'
import Link from 'next/link'


const Stories = () => {

    const StoryList = [
        {
            username: "samantha",
            imageUrl: "/profiles/samantha.jpg",
        },
        {
            username: "therock",
            imageUrl: "/profiles/therock.jpg",
        },
        {
            username: "tom_hardy",
            imageUrl: "/profiles/tomhardy.jpg",
        },
        {
            username: "tonystark",
            imageUrl: "/profiles/tony stark.jpg",
        },
        {
            username: "deepika",
            imageUrl: "/profiles/deepika.jpg",
        }, {
            username: "maeve",
            imageUrl: "/profiles/maeve.jpg",
        }, {
            username: "rubylova",
            imageUrl: "/profiles/maeve.jpg",
        }, {
            username: "helloworld",
            imageUrl: "/profiles/maeve.jpg",
        }

    ];


    // Adding horizontal Scrolling Functoinality

    
    return (
        <div id="Stories" className='grid grid-flow-col border-[1px] border-slate-400 overflow-scroll'>
            {
                StoryList.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col  justify-center items-center py-3 story mx-4 w-[70px] h-[100px] '>
                                
                            <div className='bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-1'>
                                <div className='border-[3px] border-white rounded-full'>
                                    <img className='w-[56px] h-[56px] rounded-full' src={item.imageUrl} alt="Story" />

                                </div>
                            </div>


                            <p className='text-xs'>{item.username}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Stories