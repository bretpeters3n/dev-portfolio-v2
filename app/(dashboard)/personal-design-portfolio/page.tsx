'use client'

import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'

const personalDesignPortfolio = () => {
  return (
    <div>
      <PostH1
        h1="Personal Design Portfolio"
        paragraph="Before becoming a developer I spent 20 years as a designer. My professional path started in animation, moved to design, then to UI, after that UX, and ultimately to web and VR development."
      />
      <PostImage
        src="/posts/design-portfolio-imgs/ux-portfolio-2.png"
        figcaption="design portfolio homepage"
      />
      <PostP paragraph="This portfolio website slowly morphed into my development portfolio up until I created my actual first development portfolio. All of my animation and design work can be found in this portfolio. Check them out!" />
      <PostImage
        src="/posts/design-portfolio-imgs/ux-portfolio-7.png"
        figcaption="project detail page"
      />
      <PostP paragraph="Please do feel free to check out my previous projects and let me know if you would like to work together. Even though I have been developing more recently I still love to design and do it every day!" />

      <div className="grid grid-cols-1">
        <div>
          <PostTechSheet
            h2="Technical Sheet"
            techList={['HTML', 'CSS', 'Figma']}
          />
        </div>
        <div>
          <PostResources
            h2="Resources"
            online="https://bretpeters3n.github.io/ux-ui-portfolio_previous-portfolio/?ref=bretpetersen.com"
            github=""
          />
        </div>
      </div>
    </div>
  )
}

export default personalDesignPortfolio
