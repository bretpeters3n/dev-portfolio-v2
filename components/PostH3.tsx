import { React } from 'react'
import PostP from '@/components/PostP'

const PostH2 = (props) => {
  return (
    <div>
      <h3 className="font-bold text-white text-xl md:text-2xl pb-3 pt-4">
        {props.h3}
      </h3>
      <PostP paragraph={props.paragraph} />
      {/* <p className="font-serif text-lg pb-2">{props.paragraph}</p> */}
    </div>
  )
}

export default PostH2
