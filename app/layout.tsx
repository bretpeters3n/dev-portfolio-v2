import type { Metadata } from 'next'
import { Inter, Asset, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
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
      className={`${inter.variable} ${asset.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
