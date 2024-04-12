'use client'

import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'
import PostVideo from '@/components/PostVideo'

const beautifulMindVRApp = () => {
  return (
    <div>
      <PostH1
        h1="Beautiful Mind (VR App)"
        paragraph="After graduating from development bootcamp I found myself in Eventbright and Meetup developer circles. One of those circles was learning VR development. I decided to dive in head first! In the process learned how to make mobile games, AltSpace worlds (then VRChat worlds after AltSpace shut down), VR development, and VR publishing. In the end I made a VR app with a small group of developers."
      />
      <PostImage
        src="/posts/beautiful-mind-imgs/beautiful-mind-1-1.jpeg"
        priority="true"
        figcaption="game compilation screen"
      />
      <PostH2
        h2="The Idea"
        paragraph="I joined a group with an initial idea of creating a productivity app for ADHD users. This gradually transformed into an app that would train ADHD users valuable life skills that they can use to improve their everyday lives."
      />
      <PostH2
        h2="Research"
        paragraph="One of our group members suffered from ADHD. We were able to ask him a variety of questions to get us started with our research. We naturally moved on to doing our own research and found some very useful information in these areas:"
      />
      <ul className="font-serif text-lg list-disc list-outside pl-10 pb-4 list-gap">
        <li>
          Many users that attended the{' '}
          <a
            className="text-white underline"
            href="https://account.altvr.com/channels/1643096558373175718?ref=bretpetersen.com"
          >
            Nuerodiversiy Group in AltSpace
          </a>{' '}
          were helpful in communicating their everyday problems that disrupt
          their lives
        </li>
        <li>
          The{' '}
          <a
            className="text-white underline"
            href="https://play.google.com/store/books/details/The_Ultimate_Time_Management_Toolkit_25_Productivi?id=R9hrEAAAQBAJ&gl=US&pli=1&ref=bretpetersen.com"
          >
            Ultimate Time Management Toolkit: 25 Productivity Tools for Adults
          </a>{' '}
          with ADHD and Chronically Busy People was a great resource for
          creating productive challenges for the game
        </li>
        <li>
          Many scientific white papers helped us find other similar games that
          have been developed. This way we avoided making something that had
          already been developed and also learned from other's research
        </li>
      </ul>
      <PostH2
        h2="Development"
        paragraph="After designing our storyboards for the game and gameplay we needed to work as a group in building out the scenes we designed. In order to do this we used Github so that we could all build things together while in different parts of the world. Here are some things we learned along the way:"
      />
      <ul className="font-serif text-lg list-disc list-outside pl-10 pb-4 list-gap">
        <li>
          Learned to build 3D environments in the game engine Unity and code
          with Unity in C#
        </li>
        <li>
          Used resources like the Unity Asset Store and SketchFab to find models
        </li>
        <li>Coded animations and interactions into the gameplay</li>
      </ul>
      <PostH2
        h2="Publishing"
        paragraph="Publishing happened to be a completely new experience for all of us in the group. All publishing is controlled by Meta and we needed to comply to all of their standards. Along the way we learned to:"
      />
      <ul className="font-serif text-lg list-disc list-outside pl-10 pb-4 list-gap">
        <li>
          Publish an app to the App Lab and invite others to our app to that
          they could play and review it
        </li>
        <li>
          Create a variety of marketing assets that accompany the app on the App
          Lab website
        </li>
        <li>
          Distribute the application via App Lab and by delivering APK files to
          users with unique headset issues that prevented them from leveraging
          App Lab like the rest of us
        </li>
      </ul>
      <PostVideo video="./posts/beautiful-mind-imgs/beautiful-mind-video.mp4" />
      <div className="grid grid-cols-1 divide-white/10 divide-y gap-5">
        <div>
          <PostTechSheet
            h3="Technical Sheet"
            techList={[
              'Unity',
              'C#',
              'SketchFab',
              'Blender',
              'NovelAI',
              'Miro',
              'Premiere Pro',
            ]}
          />
        </div>
        <div>
          <PostResources
            h3="Resources"
            // online="https://bretpeters3n.github.io/affirmations-vite/"
            github="https://github.com/bretpeters3n/BMind_vrUNITYApp?ref=bretpetersen.com"
          />
        </div>
      </div>
    </div>
  )
}

export default beautifulMindVRApp
