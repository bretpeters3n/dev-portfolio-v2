import Image from 'next/image'

const Post = (props) => {
  const { description } = props
  console.log(description)
  return (
    <div className="@container">
      <div className="flex flex-col gap-6 @xl:flex-row @lg:gap-6">
        <Image
          className="flex flex-col justify-center items-center object-cover w-full aspect-video rounded-xl"
          // sizes="100%"
          // fill={true}
          src={`/posts/` + props.heroImage}
          width={450}
          height={450}
          alt="Picture of the author"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-manrope font-extrabold text-white/20">
            Portfolio
          </p>
          <h2 className="font-manrope font-extrabold text-[2rem] leading-8 pt-2 pb-3">
            {props.title}
          </h2>
          <p className="font-manrope text-[#979797] pb-3">
            {description.slice(0, 150) + '...'}
          </p>
          <p className="font-manrope text-white/20 pb-3 font-semibold text-xs">
            {props.date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post
