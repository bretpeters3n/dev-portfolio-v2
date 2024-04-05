'use client'

import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'
import { motion } from 'framer-motion'

const affirmationsApp = () => {
  return (
    <div>
      <PostH1
        h1="Affirmations App"
        paragraph="This app was designed and developed as a personal project of mine. It
        allows users to create, update, view, and delete groups of affirmations
        to boost their mood for specific life challenges."
      />
      <PostImage
        src="/posts/affirmations-app-imgs/main-1.png"
        figcaption="Affirmations homepage"
      />
      <PostH2
        h2="Design"
        paragraph="The design is quite simple and straightforward. The user is instantly
        shown the affirmations slideshow when they arrive at the homepage. Upon
        further inspection the user will find the navigation showing three
        simple options; play, settings, info."
      />
      <PostP paragraph="'PLAY' represents the homepage" />
      <PostP
        paragraph="'SETTINGS'  brings the user to a page giving them access to all affirmation groups
        they currently have. From here the user can switch groups, create new
        groups, add affirmations, edit affirmations, and delete affirmations."
      />
      <PostP
        paragraph="'ABOUT' brings the user to a page explaining how the application works and what
          it can do."
      />
      <PostImage
        src="/posts/affirmations-app-imgs/detail01.png"
        figcaption="left: Homepage (affirmations slideshow) • center: Navigation •
        right: Setup page (organize affirmations)"
      />
      <PostH2
        h2="Code"
        paragraph="I was able to practice a lot of development concepts building this
        application. In addition to using packages I've used a lot in the past
        like React Router, I was able to use some new ones like Toastify to
        allow for UI feedback."
      />
      <PostP
        paragraph="I decided to just use localStorage to store all user info for the
        project. My following planned projects include using databases, so I
        just decided to simplify this one and not use one here."
      />
      <PostImage
        src="/posts/affirmations-app-imgs/detail02.png"
        figcaption="left: Add affirmations • center: Edit affirmations •
        right: About page"
      />
      <div className="grid grid-cols-1">
        <PostH2
          h2="Future"
          paragraph=" There are some features I plan to add to this application. One is the
        ability to share affirmation groups with others. The other feature is to
        create some more stock lists of affirmations that a user can pull in so
        users don't always have to create them from scratch. Stay-tuned for
        those."
        />
        <div>
          <PostTechSheet
            h2="Technical Sheet"
            techList={[
              'React',
              'Vite',
              'MUI',
              'Framer Motion',
              'UUID',
              'Toastify',
              'Bootstrap',
              'GitHub Pages',
            ]}
          />
        </div>
        <div>
          <PostResources
            h2="Resources"
            online="https://bretpeters3n.github.io/affirmations-vite/"
            github="https://github.com/bretpeters3n/affirmations-vite?ref=bretpetersen.com"
          />
        </div>
      </div>
    </div>
  )
}

export default affirmationsApp
