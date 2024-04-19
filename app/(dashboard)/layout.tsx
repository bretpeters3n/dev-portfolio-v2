'use client'

import { useState } from 'react'
// import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
// import Footer from '@/components/Footer'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      <div
        id="top"
        className="bg-[var(--navigationBackground)] h-[85px] flex flex-row"
      >
        <div className="flex flex-col justify-center font-manrope font-bold pl-5 z-[11]">
          <Link href="/">
            <p className="text-white text-xl leading-4">
              Bret Petersen
              <br />
              <span className="italic text-lg">Full Stack Developer</span>
            </p>
          </Link>
        </div>
        {/* <Navigation /> */}
      </div>
      <section className="text-white/75 font-manrope leading-relaxed mx-auto p-5 max-w-[720px] pt-9 pb-9">
        {/* <section className="flex flex-col text-white/75 font-manrope leading-relaxed"> */}
        {children}
      </section>
      {/* <Footer /> */}
    </div>
  )
}
