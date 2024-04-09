'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  const handleHamClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current)
  }
  const testURL = '/'
  return (
    <div className="relateive">
      <nav className="fixed top-0 left-0 right-0 theme-switcher btm-gradient text-white font-manrope text-xl">
        <div id="appName" className="theme-switcher">
          {/* Affirmations */}
        </div>
        <button
          id="hamburger"
          style={{ zIndex: '10' }}
          className={isActive ? 'opened' : ''}
          onClick={handleHamClick}
          aria-label="Main Menu"
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
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
        <ul id="menu" className={isActive ? 'opened' : ''}>
          <li>
            <Link
              href={'/'}
              onClick={handleHamClick}
              className="theme-switcher"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#posts"
              onClick={handleHamClick}
              className="theme-switcher"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              onClick={handleHamClick}
              className="theme-switcher"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={handleHamClick}
              className="theme-switcher"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
