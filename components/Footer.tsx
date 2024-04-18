import { Link as LinkScroll } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center bg-[#0a0b0c] text-white/60 text-xs pt-4 pb-4 px-6 gap-6">
      <div>
        <span className="text-white">Bret Petersen</span> ©{' '}
        {new Date().getFullYear()}
      </div>
      <button className="hover:text-white">
        <a href="mailto:bretpetersen@gmail.com">Email me!</a>
      </button>
      <LinkScroll to="top" spy={true} smooth={true} duration={500}>
        <button className="hover:text-white">Scroll to top ^</button>
      </LinkScroll>
    </footer>
  )
}

export default Footer
