import { React } from 'react'

const PostLink = (props) => {
  return (
    <div className="block">
      <a
        href={props.realurl}
        className="font-serif text-lg pb-4 text-white underline"
        target="_blank"
      >
        {props.visibleurl}
      </a>
    </div>
  )
}

export default PostLink
