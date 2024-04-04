import { React } from 'react'

const PostH2 = (props) => {
  return (
    <div>
      <h3 className="font-bold text-white text-xl pb-3 pt-4">{props.h3}</h3>
      <p className="font-serif text-lg pb-2">{props.paragraph}</p>
    </div>
  )
}

export default PostH2
