'use client'

import PostH1 from '@/components/PostH1'
import PostLink from '@/components/PostLink'
import PostH2 from '@/components/PostH2'
import PostP from '@/components/PostP'

const About = () => {
  return (
    <div>
      <PostH1
        h1="About this site"
        paragraph="This is the personal development portfolio for me, Bret Petersen. Feel free to take a look at my projects and reach out to me if you 'd like to work with me. Thank you for visiting!"
      />
      <div className="mt-6 mb-28">
        <PostLink
          visibleurl="bretpetersen@gmail.com"
          realurl="mailto:bretpetersen@gmail.com"
        />
        <PostLink
          visibleurl="linkedin.com/in/bret-petersen"
          realurl="https://linkedin.com/in/bret-petersen/"
        />
        <PostLink
          visibleurl="github.com/bretpeters3n"
          realurl="https://github.com/bretpeters3n"
        />
      </div>
    </div>
  )
}

export default About
