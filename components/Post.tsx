import Image from 'next/image'

const Post = (props) => {
  const { description } = props
  console.log(description)
  return (
    <div className="">
      <Image
        className="aspect-video rounded-lg object-cover w-full max-w-[960px]"
        src={`/posts/` + props.heroImage}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <h2 className="font-manrope font-bold text-[2rem] mt-2 leading-tight">
        {props.title}
      </h2>
      <p className="font-manrope text-[#979797]">
        {description.slice(0, 110) + '...'}
      </p>
    </div>
  )
}

export default Post
