import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from 'react'

const PostVideo = (props) => {
  return (
    <iframe
      title="project video"
      className="w-full aspect-video ..."
      src={props.video}
    ></iframe>
  )
}

export default PostVideo
