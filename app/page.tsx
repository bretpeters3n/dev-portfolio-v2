'use client'

import Link from 'next/link'

const Home = () => {
  return (
    <main className="flex flex-col relative">
      <header className="h-[calc(100vh-2rem)] bg-red-500 relative text-center rounded-[3rem] m-4 content-center">
        <nav className="flex justify-center z-10 bg-indigo-500 roundedm-1 h-max absolute top-0 w-full">
          nav
        </nav>
        <h1 className="font-play text-[2.75rem] text-white">hello!</h1>
        <p className="font-manrope text-[1.75rem] text-slate-800 leading-9 pb-4">
          I’m <strong>Bret Petersen.</strong>
          <br />
          I'm a full-stack web + vr developer & designer.
        </p>
        <Link href="#work" scroll={true}>
          <button className="font-manrope border-solid border-[1px] px-4 py-1 border-slate-800 rounded-full text-slate-800 text-[1.2rem]">
            View my work
          </button>
        </Link>
      </header>
      <section id="work" className="bg-slate-500 h-96">
        section
      </section>
      <footer className="bg-green-500 h-10">footer</footer>
    </main>
  )
}

export default Home
