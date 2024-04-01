import Image from 'next/image'

const Post = () => {
  return (
    <div className="">
      <Image
        className="aspect-video rounded-lg object-cover w-full max-w-[960px]"
        src="/postImage-example.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <h2>Post title</h2>
      <p>Description</p>
    </div>
  )
}

export default Post
