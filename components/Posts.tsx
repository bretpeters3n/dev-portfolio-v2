import Link from 'next/link'
import Post from './Post'
import PortfolioPosts from '../utils/db'

const Posts = () => {
  const portfolioPosts = PortfolioPosts
  console.log('test')
  console.log(portfolioPosts)
  return (
    <div className="w-full mt-2">
      {PortfolioPosts.map((i) => {
        console.log(i.name)
        i++
      })}
      <Link href="/affirmations-app">
        <Post />
      </Link>
      <Link href="/coolibar">
        <Post />
      </Link>
      <Link href="/beautiful-mind-vr-app">
        <Post />
      </Link>
      <Link href="/magento-2-development-ux-coolibar-2">
        <Post />
      </Link>
      <Link href="/budgety">
        <Post />
      </Link>
      <Link href="/true-crime-quiz">
        <Post />
      </Link>
      <Link href="/northern-health-tracker">
        <Post />
      </Link>
      <Link href="/cat-memory">
        <Post />
      </Link>
      <Link href="/personal-design-portfolio">
        <Post />
      </Link>
    </div>
  )
}

export default Posts
