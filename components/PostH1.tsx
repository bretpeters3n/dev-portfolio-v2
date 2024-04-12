import { React } from 'react'
import PostP from '@/components/PostP'

const PostH1 = (props) => {
  return (
    <div>
      <h1 className="font-black text-white text-3xl md:text-4xl pb-3">
        {props.h1}
      </h1>
      <PostP paragraph={props.paragraph} />
      {/* <p className="font-serif text-lg pb-2">{props.paragraph}</p> */}
    </div>
  )
}

export default PostH1
