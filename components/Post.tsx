import Image from 'next/image'

const Post = (props) => {
  const { title, description, heroImage, date, tags } = props
  console.log(tags)
  return (
    <div className="@container">
      <div className="flex flex-col gap-6 @xl:flex-row @lg:gap-6">
        <Image
          className="flex flex-col justify-center items-center object-cover w-full aspect-video rounded-xl"
          // sizes="100%"
          // fill={true}
          src={`/posts/` + heroImage}
          width={450}
          height={450}
          alt="Picture of the project"
        />
        <div className="flex flex-col gap-3">
          <p className="text-xs font-manrope font-black text-white/25">
            {tags.map((item, index) => (
              <span key={index} className="text-inherit font-inherit">
                {(index ? ', ' : '') + item}
              </span>
            ))}
          </p>
          <h2 className="font-manrope font-extrabold text-2xl leading-tight">
            {title}
          </h2>
          <p className="font-manrope text-[#979797] line-clamp-3">
            {/* {description.slice(0, 150) + '...'} */}
            {description}
          </p>
          <p className="font-manrope text-white/25 font-semibold text-xs pt-1">
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post
