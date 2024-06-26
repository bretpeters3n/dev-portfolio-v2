import { React } from 'react'

const PostResources = (props) => {
  return (
    <div>
      <h3 className="font-bold text-white text-2xl md:text-3xl pb-1 pt-6">
        {props.h2}
      </h3>
      {props.online ? (
        <div>
          <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
            <p className="font-serif text-lg italic font-medium leading-relaxed text-gray-900 dark:text-white">
              This project is online at:
            </p>
          </blockquote>
          <div className="font-serif text-lg list-disc list-inside px-4">
            <a
              className="text-white underline break-all"
              href={props.online}
              // style={{ lineBreak: 'anywhere' }}
            >
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
            <a
              className="text-white underline break-all"
              href={props.github}
              // style={{ lineBreak: 'anywhere' }}
            >
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
