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
    <div className="w-full mt-2 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 p-3">
      {portfolioPosts.map((post) => (
        <div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.25,
              // type: 'spring',
              // repeat: Infinity,
              delay: 0.25,
            }}
          >
            <Link href={post.path}>
              <Post
                title={post.title}
                description={post.description}
                heroImage={post.heroImage}
              />
            </Link>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default Posts
