const PostResources = (props) => {
  return (
    <div>
      <h3 className="font-bold text-white text-xl pb-3 pt-4">{props.h3}</h3>
      <ul>
        <li>This project is online at:</li>
      </ul>
      <a href={props.online}>{props.online}</a>
      <ul>
        <li>This project is also available on github at:</li>
      </ul>
      <a href={props.github}>{props.github}</a>
    </div>
  )
}

export default PostResources
