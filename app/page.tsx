'use client'

import { useState } from 'react'
import Posts from '../components/Posts'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import '../css/Nav.css'

const Home = () => {
  const [isActive, setIsActive] = useState(false)
  const handleHamClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current)
  }
  const testURL = '/affirmations-app'
  return (
    <div>
      <Navigation />
      <main className="flex flex-col z-0">
        <header className="h-[calc(100vh-.5rem)] sm:h-[calc(100vh-.1rem)] md:h-[calc(100vh-1.5rem)] lg:h-[calc(100vh-2rem)] bg-red-500 relative text-center rounded-[2rem] m-1 sm:m-2 md:m-3 lg:m-4 content-center">
          <div className="flex flex-col justify-center h-full">
            <h1 className="flex flex-col font-play w-max text-[2.75rem] text-white mx-auto">
              hello!
              <div className="divide-y divide-solid">
                <div></div>
                <div></div>
              </div>
            </h1>

            <p className="font-manrope font-[200] text-[1.75rem] text-slate-800 leading-8 pt-3 pb-5">
              I’m{' '}
              <span className="font-[500] text-slate-800">Bret Petersen.</span>
              <br />
              I'm a full-stack web + vr developer & designer.
            </p>
            <Link href="#posts" scroll={true}>
              <button className="font-manrope font-[300] border-solid border-[1px] px-4 py-1 border-slate-800 rounded-full text-slate-800 text-[1.2rem]">
                View my work
              </button>
            </Link>
          </div>
        </header>
        <section id="posts" className="text-white max-w-[960px] mx-auto p-3">
          <Posts />
        </section>
        <footer className="flex flex-col sm:flex-row justify-between items-center bg-[#0a0b0c] text-white/60 text-xs pt-4 pb-4 px-6 gap-2">
          <div>
            <span className="text-white">Bret Petersen</span> © 2024
          </div>
          <div>Email me!</div>
          <div>Powered by Me!</div>
        </footer>
      </main>
    </div>
  )
}

export default Home
