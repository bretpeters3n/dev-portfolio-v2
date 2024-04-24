'use client'

import { Link as LinkScroll } from 'react-scroll'
import Link from 'next/link'

const Footer = () => {
  return (
    // <footer className="mt-auto">Footer</footer>
    <footer className="mt-auto flex flex-col sm:flex-row justify-between items-center bg-[#0a0b0c] text-white/60 pt-4 pb-4 px-6 gap-6">
      <div className="text-white text-sm">
        <span className="font-bold">
          <Link href={'/about'}>Bret Petersen</Link>
        </span>{' '}
        © {new Date().getFullYear()}
      </div>
      {/* <button className="hover:text-white text-xs"> */}
      <a
        href="mailto:bretpetersen@gmail.com"
        className="hover:text-white text-xs"
      >
        Email me!
      </a>
      {/* </button> */}
      <LinkScroll
        to="top"
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-white text-xs"
      >
        <button>Scroll to top ^</button>
      </LinkScroll>
    </footer>
  )
}

export default Footer
