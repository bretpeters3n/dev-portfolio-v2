import { React } from 'react'
import PostP from '@/components/PostP'

const PostH2 = (props) => {
  return (
    <div>
      <h2 className="font-black text-white text-2xl md:text-3xl pb-3 pt-4">
        {props.h2}
      </h2>
      {/* <p className="font-serif text-lg pb-2">{props.paragraph}</p> */}
      <PostP paragraph={props.paragraph} />
    </div>
  )
}

export default PostH2
