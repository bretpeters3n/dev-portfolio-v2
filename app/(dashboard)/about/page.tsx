'use client'

import PostH1 from '@/components/PostH1'
import PostLink from '@/components/PostLink'
import PostH2 from '@/components/PostH2'
import PostP from '@/components/PostP'
import SocialIcons from '@/components/SocialIcons'

const About = () => {
  return (
    <div>
      <PostH1
        h1="About this site"
        paragraph="This is the personal development portfolio for me, Bret Petersen. Feel free to take a look at my projects and reach out to me if you 'd like to work with me. Thank you for visiting!"
      />
      <SocialIcons />
    </div>
  )
}

export default About
