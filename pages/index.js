import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Home/Navbar'
import Stories from '../components/Home/Stories'
import Post from '../components/Home/Post'
import Profile from '../components/Home/Profile'
import Suggestion from '../components/Home/Suggestion'

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Instagram Clone</title>
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main className='flex justify-center py-8 font-poppins' >

        <div className=' flex w-[70%]'>


          <div id="Stores_Posts" className='w-[50%]' >
            <Stories />

            <Post />
            <Post />
            <Post />
          </div>

          <div id="Profile_Suggestions" className='w-[50%]'>
              <Profile />
              <Suggestion />
          </div>

        </div>
      </main>


    </div>
  )
}
