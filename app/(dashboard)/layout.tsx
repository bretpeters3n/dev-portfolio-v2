import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="bg-[#E04C3D] h-[85px] flex flex-row">
        <div className="flex flex-col justify-center font-manrope font-bold text-slate-800 text-[1.5rem] pl-5">
          <Link href="/">
            Bret Petersen •{' '}
            <span className="italic text-slate-800">Full Stack Developer</span>
          </Link>
        </div>
        <Navigation />
      </div>
      <section className="flex flex-col mx-auto p-5 max-w-[720px] pt-9 pb-9">
        {children}
      </section>
    </div>
  )
}
