import Image from 'next/image'
import { React } from 'react'

const PostImage = (props) => {
  return (
    <div className="flex flex-col items-center">
      <figure className="flex flex-col text-center text-xs p-4 gap-2">
        <Image
          src={props.src}
          width={800}
          height={500}
          // fill
          style={{ objectFit: 'contain' }}
          alt="Initial screen of Affirmations app"
        />

        <figcaption className="text-white/60">{props.figcaption}</figcaption>
      </figure>
    </div>
  )
}

export default PostImage
