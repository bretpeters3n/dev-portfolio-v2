'use client'

import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'

const trueCrimeQuiz = () => {
  return (
    <div>
      <PostH1
        h1="True Crime Quiz"
        paragraph="A responsive application that allows users to take a true crime quiz. I created this application with three classmates from my Full Stack Web Development Bootcamp and this was our final project!"
      />
      <PostImage
        src="/posts/true-crime-quiz-imgs/true-crime-quiz-2.png"
        priority="true"
        figcaption="true crime quiz homescreen"
      />

      <div className="grid grid-cols-1">
        <div>
          <PostTechSheet
            h2="Technical Sheet"
            techList={['Framer Motion', 'React Router', 'Mongoose', 'Express']}
          />
        </div>
        <PostImage
          src="/posts/true-crime-quiz-imgs/true-crime-quiz-3.png"
          figcaption="true crime quiz question screen"
        />
        <div>
          <PostResources
            h2="Resources"
            online=""
            github="Https://github.com/bretpeters3n/true-crime-quiz?ref=bretpetersen.com"
          />
        </div>
      </div>
    </div>
  )
}

export default trueCrimeQuiz
