import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from 'react'

const PostH1 = (props) => {
  return (
    <div>
      <h1 className="font-bold text-white text-3xl pb-3">{props.h1}</h1>
      <p className="pb-2">{props.paragraph}</p>
    </div>
  )
}

export default PostH1
