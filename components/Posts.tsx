import Link from 'next/link'
import Post from './Post'

const Posts = () => {
  return (
    <div className="w-full mt-2">
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
