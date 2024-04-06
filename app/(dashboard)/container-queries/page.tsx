'use client'

import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'
import { motion } from 'framer-motion'

const Article = () => {
  return (
    <article className="@container bg-slate-800 rounded-xl p-4 text-slate-800">
      <div className="flex flex-col gap-2 @md:flex-row @lg:gap-4">
        <div className="flex flex-col justify-center items-center w-full aspect-video bg-red-400 rounded-xl">
          Image
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-manrope font-black text-[2em] bg-green-400 rounded-xl p-2">
            Title title title
          </h1>
          <p className="bg-yellow-400 rounded-xl p-2">Body</p>
        </div>
      </div>
    </article>
  )
}

const containerQueries = () => {
  return (
    <div className="posts w-full mt-2 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 p-3">
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  )
}

export default containerQueries
