import Link from 'next/link'
import Post from './Post'
import PortfolioPosts from '../utils/db-local'
import { motion } from 'framer-motion'

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
}

const Posts = () => {
  const portfolioPosts = PortfolioPosts

  return (
    <div className="posts w-full mt-2 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 p-3">
      {portfolioPosts.map((post) => (
        <div key={post.path}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: 'spring',
              // repeat: Infinity,
              delay: 0.25,
            }}
          >
            <Link href={post.path}>
              <Post
                title={post.title}
                description={post.description}
                heroImage={post.heroImage}
                date={post.date}
              />
            </Link>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default Posts
