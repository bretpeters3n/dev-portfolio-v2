'use client'

import { useState } from 'react'
import Posts from '../components/Posts'
// import Footer from '../components/Footer'
import { Link } from 'react-scroll'
// import Footer from '@/components/Footer'
// import SocialIcons from '@/components/SocialIcons'

const Home = () => {
  const [isActive, setIsActive] = useState(false)
  const handleHamClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current)
  }
  const testURL = '/affirmations-app'
  return (
    <div>
      {/* <Navigation /> */}
      <main id="top" className="flex flex-col z-0">
        <header className="h-[calc(100vh-.5rem)] sm:h-[calc(100vh-1rem)] md:h-[calc(100vh-1.5rem)] lg:h-[calc(100vh-2rem)] site-header-content relative text-center rounded-[2rem] m-1 sm:m-2 md:m-3 lg:m-4 content-center">
          <div className="flex flex-col justify-center h-full px-4">
            <h1 className="flex flex-col font-asset w-max text-[2.75rem] md:text-[3.75rem] text-white mx-auto md:pb-2">
              hello!
              <div className="divide-y divide-solid">
                <div></div>
                <div></div>
              </div>
            </h1>

            <p className="font-manrope font-[200] text-[1.75rem] md:text-[2.25rem] text-slate-800 leading-[2rem] md:leading-[2.5rem] pt-3 pb-5 md:pb-6">
              I’m{' '}
              <span className="font-[500] text-slate-800">Bret Petersen.</span>
              <br />
              {/* I'm a full-stack web + vr developer & designer. */}
              I'm a full-stack web developer & UX designer.
            </p>
            <Link to="posts" spy={true} smooth={true} duration={500}>
              <button className="font-manrope font-[300] border-solid hover:border-slate-800/0 hover:bg-white border-[1px] px-6 py-2 md:px-8 border-slate-800 rounded-full text-slate-800 text-[1.2rem] md:text-[1.3rem]">
                View my work
              </button>
            </Link>
            <div className="flex flex-row justify-center pt-12">
              {/* <SocialIcons /> */}
            </div>
          </div>
        </header>
        <section
          // style={{ width: '100vw' }}
          id="posts"
          className="flex flex-col items-center text-white p-3"
        >
          <div className="flex flex-col items-center w-[375px] md:w-[599px] lg:w-[900px] xl:w-[1100px]">
            <Posts />
          </div>
        </section>
        {/* <Footer /> */}
      </main>
    </div>
  )
}

export default Home
