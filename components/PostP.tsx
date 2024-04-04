import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from 'react'

const PostP = (props) => {
  return <div className="font-serif text-lg pb-2">{props.paragraph}</div>
}

export default PostP
