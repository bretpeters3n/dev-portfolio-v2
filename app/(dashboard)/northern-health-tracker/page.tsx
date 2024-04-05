'use client'

import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'

const northernHealthTracker = () => {
  return (
    <div>
      <PostH1
        h1="Northern Health Tracker"
        paragraph="A cross-platform application that allows users to keep track of their health goals."
      />
      <PostImage
        src="/posts/northern-health-tracker-imgs/northern-health-tracker-2.png"
        figcaption="northern health tracker homescreen"
      />

      <div className="grid grid-cols-1">
        <div>
          <PostTechSheet
            h2="Technical Sheet"
            techList={['Chart.js', 'SQL', 'Node.js', 'Javascript', 'Heroku']}
          />
        </div>
        <div>
          <PostResources
            h2="Resources"
            online=""
            github="Https://github.com/bretpeters3n/northern-health-tracker?ref=bretpetersen.com"
          />
        </div>
      </div>
    </div>
  )
}

export default northernHealthTracker
