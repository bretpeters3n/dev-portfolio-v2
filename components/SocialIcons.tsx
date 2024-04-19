import { SocialIcon } from 'react-social-icons'

const SocialIcons = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="opacity-75 hover:opacity-100">
        <SocialIcon
          bgColor="white"
          fgColor="transparent"
          url="https://github.com/bretpeters3n"
          target="_blank"
        />
      </div>
      <div className="opacity-75 hover:opacity-100">
        <SocialIcon
          bgColor="white"
          fgColor="transparent"
          url="https://linkedin.com/in/bret-petersen/"
          target="_blank"
        />
      </div>
      <div className="opacity-75 hover:opacity-100">
        <SocialIcon
          bgColor="white"
          fgColor="transparent"
          url="mailto:bretpetersen@gmail.com"
          target="_blank"
        />
      </div>
    </div>
  )
}

export default SocialIcons
