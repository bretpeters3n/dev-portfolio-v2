import { React } from 'react'

const PostVideo = (props) => {
  return (
    // <iframe
    //   title="project video"
    //   className="w-full aspect-video ..."
    //   src={props.video}
    // ></iframe>
    <video controls>
      <source src={props.video} type="video/mp4" />
    </video>
  )
}

export default PostVideo
