import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'

const catMemory = () => {
  return (
    <div>
      <PostH1
        h1="Cat Memory"
        paragraph="A responsive application that allows users to play a game of memory with cat photos."
      />
      <PostImage
        src="/posts/cat-memory-imgs/cat-memory-2.gif"
        figcaption="cat memory in action!"
      />

      <div className="grid grid-cols-1">
        <div>
          <PostTechSheet
            h2="Technical Sheet"
            techList={['Bootstrap', 'jQuery', 'Javascript', 'the Cat API']}
          />
        </div>
        <div>
          <PostResources
            h2="Resources"
            online="Https://bretpeters3n.github.io/cat-memory/"
            github="Https://github.com/bretpeters3n/northern-health-tracker?ref=bretpetersen.com"
          />
        </div>
      </div>
    </div>
  )
}

export default catMemory
