import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'

const devPortfolioV1 = () => {
  return (
    <div>
      <PostH1
        h1="First Development Portfolio"
        paragraph="This is my first development portfolio. I made this shortly after graduating from the Full-Stack Web Development program I completed in December 2020."
      />
      <PostImage
        src="/posts/dev-portfolio-v1-imgs/first-dev-portfolio-4-1.jpeg"
        figcaption="layouts from project"
      />

      <div className="grid grid-cols-1">
        <div>
          <PostTechSheet
            h2="Technical Sheet"
            techList={[
              'ReactJS',
              'Node.js',
              'JSON',
              'Javascript',
              'Bootstrap',
              'CSS',
              'HTML5',
            ]}
          />
        </div>
        <div>
          <PostResources
            h2="Resources"
            online="Https://bretpeters3n.github.io/dev-portfolio/"
            github="Https://github.com/bretpeters3n/dev-portfolio?ref=bretpetersen.com"
          />
        </div>
      </div>
    </div>
  )
}

export default devPortfolioV1
