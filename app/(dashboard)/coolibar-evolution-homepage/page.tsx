'use client'

import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostH3 from '@/components/PostH3'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'

const coolibar = () => {
  return (
    <div>
      {/* Evolution of a Homepage @ Coolibar (Magento 2) */}
      <PostH1
        h1="Evolution of a Homepage @ Coolibar (Magento 2)"
        paragraph="My first development position has come to an end. The company owner decided to move Coolibar to Florida, leaving most of us behind in Minnesota unemployed. Luckily I was able to complete one last project that I even impressed myself with!"
      />
      <PostP paragraph="The project was an entire homepage redesign. Following that I was able to add an optional full browser hero video version with our navigation overlaying the video, making the video fit perfectly into desktop, tablet, and mobile views." />
      <PostImage
        src="/posts/coolibar-homepage-imgs/main-1.jpeg"
        priority="true"
        figcaption="left: Original design • right: Homepage redesign • center: Homepage redesign with fullscreen video"
      />
      {/* Homepage redesign */}
      <PostH2
        h2="Homepage UX"
        paragraph="When I first arrived at the company the homepage didn't have much thought put into it. It was comprised of unoptimized images, a hero image with no copy, sections showing benefits of our fabrics that led no where, sections leading to poorly thought out or missing landing pages, and finally, more sections with large images and buttons that led to the same places that our main navigation already took users to."
      />
      <PostP paragraph="Everyone on the creative team wanted to change this experience, so I decided to take the lead redesigning the homepage with the creative teams input, and then finally developed the entire new homepage myself." />
      <PostImage
        src="/posts/coolibar-homepage-imgs/detail01.jpeg"
        figcaption="left: Before our homepage redesign • right: After our homepage redesign"
      />
      {/* Competitor examples */}
      <PostH3
        h3="Competitor examples"
        paragraph="I asked everyone involved to find competitor examples that they believed worked really well. In our next meeting everyone presented their examples and explained what they thought worked well and why. After we all presented we then voted on all of the examples."
      />
      {/* Layout and mockups */}
      <PostH3
        h3="Layout and mockups"
        paragraph="The next step was for me to take all of these examples and split them into sections that would work for our companies products and vision. These sections included most popular clothing categories, a fabric showcase, a marketing promotion area with promoted specific products below, a testimonials section, and a redesigned 'Best sellers' section."
      />
      <PostP paragraph="With all of these defined sections along with the examples we voted on, I created a Figma project where all of us could 'frankenstien' together homepage examples to show in our next meeting." />
      <PostImage
        src="/posts/coolibar-homepage-imgs/detail04.jpeg"
        figcaption="example of 'frankenstien' layouts in Figma"
      />
      {/* Final design */}
      <PostH3
        h3="Final design"
        paragraph="I asked everyone involved to find competitor examples that they believed worked really well. In our next meeting everyone presented their examples and explained what they thought worked well and why. After we all presented we then voted on all of the examples."
      />
      {/* The coding! */}
      <PostH3
        h3="The development"
        paragraph="The coding for this project went pretty quickly and was mostly comprised of HTML and CSS work. The 'Best sellers' section involved JS and working within the Nosto platform. The launch went well and we luckily had no issues or fire drills following it. We did make some small edits here and there, but nothing diverting from our chosen design. Success!"
      />
      {/* Homepage fullscreen video */}
      <PostH2
        h2="Homepage fullscreen video"
        paragraph="Our marketing department came to my small team with a new video they were making to promote a clothing color 'Apricot Crush'. They wanted this video to take over the entire page on desktop, tablet, and mobile views. I was excited to take this project on!"
      />
      <PostImage
        src="/posts/coolibar-homepage-imgs/detail02.jpeg"
        figcaption="example of moving our Apricot Crush promotion from a section to the hero section as full screen video"
      />
      <PostH3
        h3="Fullscreen video and navigation overlay"
        paragraph="As stated above, we wanted the video to be fullscreen. No matter how narrow or wide the view, we wanted the page filled with. This meant our navigation needed to not have a white background and instead have a transparent background with all of the navigation content converted to white so it would be visible on top of the video. This design portion was simple enough. It was the coding that took some trial and error."
      />
      <PostH3
        h3="The development"
        paragraph="Our e-commerce platform was Magento 2 and our video service was Vimeo. At first my entire team thought we were going to have to tinker with the navigation within Magento 2 and we were not excited about that because our timeline was too tight to risk possibly breaking the navigation in some way."
      />
      <PostP paragraph="CSS really came to the rescue here. I was able to use only CSS to redesign/develop the entire homepage full screen video hero with our navigation overlaying it. It was nothing more than extremely well thought out CSS changes that gave us our final product. The personal success of pulling this off along with the internal compliments made my week!" />
      <PostImage
        src="/posts/coolibar-homepage-imgs/detail03.jpeg"
        figcaption="left: Redesigned homepage • right: Redesigned homepage with fullscreen video and navigation overlay"
      />
      <PostH2 h2="That's a wrap" paragraph="Thanks for reading!" />
    </div>
  )
}

export default coolibar
