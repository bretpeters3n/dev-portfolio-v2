'use client'

import { useState } from 'react'
import Link from 'next/link'
import SocialIcons from './SocialIcons'

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  const handleHamClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current)
  }

  return (
    <nav
      className="theme-switcher btm-gradient text-white font-manrope text-xl"
      style={{ zIndex: '20', pointerEvents: 'none' }}
    >
      <div id="appName" className="theme-switcher">
        {/* Affirmations */}
      </div>
      <button
        id="hamburger"
        style={{ zIndex: '30', pointerEvents: 'auto' }}
        className={isActive ? 'opened' : ''}
        onClick={handleHamClick}
        aria-label="Main Menu"
      >
        <svg
          width="40"
          height="40"
          className="fixed top-5 right-5 drop-shadow-[0_0_10px_rgba(0,0,0,.5)]"
          viewBox="0 0 100 100"
        >
          {/* NEW */}
          <path
            className="theme-switcher line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="theme-switcher line line2" d="M 20,50 H 80" />
          <path
            className="theme-switcher line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <ul
        id="menu"
        style={{ zIndex: '20', pointerEvents: 'auto' }}
        className={
          isActive
            ? 'opened font-semibold flex flex-col items-center m-auto'
            : ''
        }
      >
        <li className="w-max hover:font-extrabold">
          <Link href={'/'} onClick={handleHamClick} className="theme-switcher">
            Home
          </Link>
        </li>
        <li className="w-max hover:font-extrabold">
          <Link
            href="/#posts"
            onClick={handleHamClick}
            className="theme-switcher"
          >
            Work
          </Link>
        </li>
        <li className="w-max">
          <Link
            href="./pdf/BretPetersenResume-1l.pdf"
            download="BretPetersenResume-1l"
            className="theme-switcher"
          >
            <p className="hover:font-extrabold leading-[1.25rem]">
              <span className="">Resume</span>
              <br />
              <span className="text-xs font-normal">(download pdf)</span>
            </p>
          </Link>
        </li>

        {/* <li>
          <Link
            href="/resume"
            onClick={handleHamClick}
            className="theme-switcher"
          >
            Resume
          </Link>
        </li> */}
        <li className="w-max hover:font-extrabold">
          <Link
            href="/about"
            onClick={handleHamClick}
            className="theme-switcher"
          >
            About
          </Link>
        </li>
        <li className="w-max">
          <SocialIcons />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
