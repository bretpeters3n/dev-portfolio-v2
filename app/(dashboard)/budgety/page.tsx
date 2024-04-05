'use client'

import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'

const budgety = () => {
  return (
    <div>
      <PostH1
        h1="Budgety"
        paragraph="I acted as project lead in developing an application allowing users to create budgets and organize their funds. I created this app with a group of 3 other developers I met at a FreeCodeCamp Meetup."
      />
      <PostImage
        src="/posts/budgety-imgs/budgety-1.png"
        figcaption="budgety homescreen"
      />

      <div className="grid grid-cols-1">
        <div>
          <PostTechSheet
            h2="Technical Sheet"
            techList={[
              'Nest JS',
              'Typescript',
              'MongoDB',
              'Bcrypt',
              'Passport-JWT',
              'GitHub',
              'GitHub Pages',
            ]}
          />
        </div>
        <PostImage
          src="/posts/budgety-imgs/budgety-2.png"
          figcaption="this is a future version of Budgety, hence the visual difference from the above screenshot."
        />
        <div>
          <PostResources
            h2="Resources"
            online=""
            github="https://github.com/bretpeters3n/seal-team-3?ref=bretpetersen.com"
          />
        </div>
      </div>
    </div>
  )
}

export default budgety
