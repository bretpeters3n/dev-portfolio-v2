const PostTechSheet = (props) => {
  return (
    <div>
      <h3 className="font-bold text-white text-xl pb-3 pt-4">{props.h3}</h3>
      <blockquote className="pb-2">
        Code technologies I got involved with while working on this project:
      </blockquote>
      <ul className="list-disc list-inside pl-4">
        {props.techList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostTechSheet
