import { React } from 'react'

const PostResources = (props) => {
  return (
    <div>
      <h2 className="font-bold text-white text-2xl pb-1 pt-6">{props.h2}</h2>
      {props.online ? (
        <div>
          <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
            <p className="font-serif text-lg italic font-medium leading-relaxed text-gray-900 dark:text-white">
              This project is online at:
            </p>
          </blockquote>
          <div className="font-serif text-lg list-disc list-inside px-4">
            <a className="text-white underline" href={props.online}>
              {props.online}
            </a>
          </div>
        </div>
      ) : (
        ''
      )}

      {props.github ? (
        <div>
          <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
            <p className="font-serif text-lg italic font-medium leading-relaxed text-gray-900 dark:text-white">
              This project is available on github at:
            </p>
          </blockquote>
          <div className="font-serif text-lg list-disc list-inside px-4">
            <a className="text-white underline" href={props.github}>
              {props.github}
            </a>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default PostResources
