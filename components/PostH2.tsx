import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from 'react'

const PostH2 = (props) => {
  return (
    <div>
      <h2 className="font-bold text-white text-2xl pb-3 pt-4">{props.h2}</h2>
      <p className="font-serif text-lg pb-2">{props.paragraph}</p>
    </div>
  )
}

export default PostH2
