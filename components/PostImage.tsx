import Image from 'next/image'
import { React } from 'react'
import { motion } from 'framer-motion'

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
}

const PostImage = (props) => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        type: 'spring',
        // repeat: Infinity,
        delay: 0.25,
      }}
    >
      <div className="flex flex-col items-center pb-4">
        <figure className="flex flex-col text-center text-xs gap-3 pt-3">
          <Image
            src={props.src}
            width={800}
            height={500}
            priority={props.priority}
            style={{ objectFit: 'contain' }}
            alt="Initial screen of Affirmations app"
          />

          <figcaption className="text-white/60">{props.figcaption}</figcaption>
        </figure>
      </div>
    </motion.div>
  )
}

export default PostImage
