import { React } from 'react'

const PostTechSheet = (props) => {
  return (
    <div>
      <h2 className="font-bold text-white text-2xl pb-1 pt-6">{props.h2}</h2>
      <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-lg italic font-medium leading-relaxed text-gray-900 dark:text-white">
          Code technologies I got involved with while working on this project:
        </p>
      </blockquote>
      <ul className="font-serif text-lg list-disc list-inside pl-4 pb-2 columns-1 xs:columns-2 sm:columns-3">
        {props.techList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostTechSheet
