'use client'

import { useState } from 'react'
// import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div
        id="top"
        className="bg-[var(--navigationBackground)] h-[85px] flex flex-row"
      >
        {/* <div
          className="flex flex-col justify-center font-manrope font-bold pl-5"
          style={{ zIndex: 11 }}
        >
          <Link href="/">
            <p className="text-white text-xl leading-4">
              Bret Petersen
              <br />
              <span className="italic text-lg">Full Stack Developer</span>
            </p>
          </Link>
        </div> */}
        {/* <Navigation /> */}
      </div>
      <section className="flex flex-col text-white/75 font-manrope leading-relaxed mx-auto p-5 max-w-[720px] pt-9 pb-9">
        {/* <section className="flex flex-col text-white/75 font-manrope leading-relaxed"> */}
        {children}
      </section>
      <footer className="flex flex-col sm:flex-row justify-between items-center bg-[#0a0b0c] text-white/60 text-xs pt-4 pb-4 px-6 gap-2">
        <div>
          <span className="text-white">Bret Petersen</span> ©{' '}
          {new Date().getFullYear()}
        </div>
        <button className="hover:text-white">
          <a href="mailto:bretpetersen@gmail.com">Email me!</a>
        </button>
        <LinkScroll to="top" spy={true} smooth={true} duration={500}>
          <button className="hover:text-white">Scroll to top ^</button>
        </LinkScroll>
      </footer>
    </div>
  )
}
