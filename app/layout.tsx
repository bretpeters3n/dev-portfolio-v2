import type { Metadata } from 'next'
// import { Inter, Asset, Manrope } from 'next/font/google'
import { Asset, Manrope } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import '../css/Nav.css'
import './globals.css'

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// })
const asset = Asset({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-asset',
  display: 'swap',
})
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bret Petersen - Full Stack Developer',
  description: 'Development portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      // className={`${inter.variable} ${asset.variable} ${manrope.variable}`}
      className={`${asset.variable} ${manrope.variable}`}
    >
      {/* <body className=""> */}
      <body className="flex flex-col h-screen">
        {/* <div className="flex flex-col h-screen"> */}
        <div className="z-10">{children}</div>
        <Navigation />
        <Footer />
        {/* </div> */}
      </body>
    </html>
  )
}
