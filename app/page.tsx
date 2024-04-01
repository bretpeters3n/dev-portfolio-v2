'use client'

import Posts from '../components/Posts'
import Link from 'next/link'

const Home = () => {
  return (
    <main className="flex flex-col justify-center">
      <header className="h-[calc(100vh-1.5rem)] bg-red-500 relative text-center rounded-[3rem] m-3 content-center">
        <nav className="flex justify-center z-10 bg-indigo-500 roundedm-1 h-max absolute top-0 w-full">
          nav
        </nav>
        <div className="flex flex-col justify-center h-full">
          <h1 className="flex flex-col font-play w-max text-[2.75rem] text-white mx-auto">
            hello!
            <div className="divide-y divide-solid">
              <div></div>
              <div></div>
            </div>
          </h1>

          <p className="font-manrope font-[200] text-[1.75rem] text-slate-800 leading-8 pt-3 pb-5">
            I’m <span className="font-[500]">Bret Petersen.</span>
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
      <section id="posts" className="mx-auto text-white">
        <Posts />
      </section>
      <footer className="bg-green-500 h-10 ">footer</footer>
    </main>
  )
}

export default Home
