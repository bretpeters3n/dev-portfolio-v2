'use client'

import PostH1 from '@/components/PostH1'
// import PostImage from '@/components/PostImage'
import PostH2 from '@/components/PostH2'
import PostH3 from '@/components/PostH3'
import PostP from '@/components/PostP'
import PostLink from '@/components/PostLink'

const Resume = () => {
  return (
    <div>
      <PostH1
        h1="Resume"
        paragraph="My resume is in PDF format and can be downloaded below. It is also available to read on this page."
      />
      <a
        href="./pdf/BretPetersenResume-1l.pdf"
        download="BretPetersenResume-1l"
        className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600"
      >
        Download the pdf
      </a>
      <PostH2 h2="Bret Petersen" />
      <PostLink
        visibleurl="bretpetersen@gmail.com"
        realurl="mailto:bretpetersen@gmail.com"
      />
      <PostLink
        visibleurl="bretpetersen.com"
        realurl="https://bretpetersen.com"
      />
      <PostLink
        visibleurl="linkedin.com/in/bret-petersen"
        realurl="https://linkedin.com/in/bret-petersen"
      />
      <PostLink
        visibleurl="github.com/bretpeters3n"
        realurl="https://github.com/bretpeters3n"
      />
      <PostH2 h2="Full Stack Developer Profile" />
      <PostP paragraph="Minneapolis, MN 55404 (willing to relocate)" />
      <PostP paragraph="415.939.1779" />

      <PostH3
        h3="Technologically advanced and highly adaptable professional with comprehensive experience designing and developing robust and scalable web applications in fast-paced environments."
        paragraph="Persistent, multi-skilled full stack web developer with 10+ years of relative experience and demonstrated success as both a leader of innovative teams and as a creator in fast-paced environments. Specialties include front-end web development, React, VR development, UX design, graphic design, and animation. Life-long learner, highly self-motivated, skilled communicator, and a dedicated team player."
      />
      <PostH2
        h2="Areas of Expertise"
        paragraph="Front-End Web Development • RESTful API Design • Responsive Design Techniques • Cross-Browser Compatibility • Technical Skills • AI & VR Development • Web Performance Optimization • UX/Graphic Design • 3D Animation • Project Management • Process Improvement • Teamwork & Collaboration • Troubleshooting & Debugging"
      />
      <PostH2 h2="Technical Skills" />
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">Languages: </span>
        JavaScript, ES6, jQuery, NodeJS, CSS, PHP, C#, Typescript, HTML5
      </p>
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">Frameworks: </span>
        ReactJS, NodeJS, NextJS, ExpressJS, Tailwind CSS, LangChain, Magento 2,
        Unity, Bootstrap
      </p>
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">Platforms: </span>
        OpenAI, Unity, Vercel, Fly.io, GitHub, GitHub Pages
      </p>
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">Tools: </span>
        Figma, Vite, Git, MUI (Material-UI), Prisma, Neon
      </p>
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">Databases: </span>
        MongoDB, SQL, MySQL, PostgreSQL
      </p>
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">
          Testing Methodologies:{' '}
        </span>
        Unit Testing, Snapshot Testing
      </p>
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">
          Other Expertise:{' '}
        </span>
        React Native, Model-View-Controller, Object-Relational Mapping, Bcrypt,
        Blender, Oculus App Store
      </p>
      {/* PROFESSIONAL EXPERIENCE */}
      <PostH2 h2="Professional Experience" />
      {/* Front End Web Developer and Designer */}
      <div className="font-serif font-bold italic">
        <h3 className="text-xl text-white">
          Front-End Web Developer & UX Designer
        </h3>
        <p className="text-white text-lg">COOLIBAR, Minneapolis, MN</p>
        <p className="text-white text-lg pb-2">2022 to 2023</p>
        <p className="font-serif font-medium text-lg not-italic">
          Developed responsive and user-friendly front-end interfaces for web
          applications, ensuring cross-browser compatibility and accessibility.
          Conducted user research, usability testing, and analysis to gather
          insights and inform UX design decisions.
        </p>
        <ul className="font-serif font-medium text-lg not-italic">
          <li>
            • Achieved a 21.4% increase in accessibility, reaching 89.3%, by
            implementing upgrades to web standards code, thereby enhancing user
            engagement.
          </li>
          <li>
            • Implemented modern UX strategies to enhance utility navigation,
            reducing cognitive load in the user experience.
          </li>
          <li>
            • Spearheaded a homepage redesign project to optimize product
            visibility and aesthetic appeal on the company's Magento 2 homepage,
            resulting in a 30% increase in visibility.
          </li>
          <li>
            • Played a key role in improving SEO performance by implementing PLP
            tag additions, schema markups, bug fixes, and other tasks, leading
            to a significant rise in website traffic and online presence.
          </li>
        </ul>
      </div>
      {/* UX/UI Designer */}
      <div className="font-serif font-bold italic">
        <h3 className="text-xl text-white">UX/UI Designer</h3>
        <p className="text-white text-lg">IRISH TITAN, St. Louis Park, MN</p>
        <p className="text-white text-lg pb-2">2020 to 2021</p>
        <p className="font-serif font-medium text-lg not-italic">
          Facilitated discovery meetings with new clients to identify their
          business requirements, leading to the development of tailored
          solutions.
        </p>
        <ul className="font-serif font-medium text-lg not-italic">
          <li>
            • Provided strategic guidance to clients on selecting optimal
            e-commerce platforms and applications, attaining a significant
            improvement in customer retention.
          </li>
          <li>
            • Implemented Figma across projects, fostering enhanced design
            collaboration and reducing project turnaround time by 20%.
          </li>
        </ul>
      </div>
      {/* Web Specialist */}
      <div className="font-serif font-bold italic">
        <h3 className="text-xl text-white">Web Specialist</h3>
        <p className="text-white text-lg">UNITED HEALTHCARE, Hopkins, MN</p>
        <p className="text-white text-lg pb-2">2019</p>
        <p className="font-serif font-medium text-lg not-italic">
          Ensured the efficiency of animated ad production through the
          utilization of HTML5 & JS, while refining the design and development
          process of customer-facing emails with user-friendly templates.
        </p>
        <ul className="font-serif font-medium text-lg not-italic">
          <li>
            • Recognized with the 'employee of the month' accolade during the
            brief contract tenure.
          </li>
          <li>
            • Boosted sales email production by 30% through the development of
            user-friendly templates.
          </li>
        </ul>
      </div>
      {/* Web Animator */}
      <div className="font-serif font-bold italic">
        <h3 className="text-xl text-white">Web Animator</h3>
        <p className="text-white text-lg">TARGET, Minneapolis, MN</p>
        <p className="text-white text-lg pb-2">2018 to 2019</p>
        <p className="font-serif font-medium text-lg not-italic">
          Fostered collaboration among fellow designers and developers,
          translating collective ideas into vibrant animated ads for diverse
          seasonal marketing campaigns.
        </p>
        <ul className="font-serif font-medium text-lg not-italic">
          <li>
            • Elevated productivity and visual aesthetics by integrating modern
            animation software that enhanced efficiency in ad production and
            seamless animations.
          </li>
          <li>
            • Improved the efficiency of creating animated advertisements by
            20%, resulting in streamlined processes and increased output.
          </li>
        </ul>
      </div>
      {/* Lead Web Designer & Web Animator */}
      <div className="font-serif font-bold italic">
        <h3 className="text-xl text-white">Lead Web Designer & Web Animator</h3>
        <p className="text-white text-lg">
          SAN FRANCISCO AGENCIES, San Francisco, CA
        </p>
        <p className="text-white text-lg pb-2">2005 to 2018</p>
        <p className="font-serif font-medium text-lg not-italic">
          Demonstrated proficiency in website design, style guide creation,
          conceptual brainstorming, storyboarding, wireframing, and ad
          animation, and adeptness in both receiving and providing constructive
          feedback. Gained extensive experience collaborating on
          cross-functional teams across various settings, including large
          corporations, startups, and boutique agencies.
        </p>
        <ul className="font-serif font-medium text-lg not-italic">
          <li>
            • Served as the key liaison between developers and fellow creative
            people, such as designers and creative directors, leveraging
            proficiency in coding to facilitate effective communication.
          </li>
          <li>
            • Agencies include: Google, AKQA, Organic Inc., Doremus, Personal
            Capital, Lift, Cibo, Teak, Freestyle Interactive, and Agency.com.
          </li>
        </ul>
      </div>
      {/* KEY PROJECTS */}
      <PostH2 h2="Key Projects" />
      {/* Affirmations */}
      <div className="font-serif font-bold italic">
        <h3 className="text-xl text-white">Affirmations</h3>
        <p className="text-white text-lg">
          github.com/bretpeters3n/affirmations-vite
        </p>
        <p className="text-white text-lg pb-2">2023</p>
        <ul className="font-serif font-medium text-lg not-italic">
          <li>
            • Designed and implemented a personal project enabling users to
            manage affirmations tailored to address specific life challenges,
            facilitating mood enhancement.
          </li>
          <li>
            • Leveraged tools, including React, Vite, MUI, Framer Motion, UUID,
            Toastify, Bootstrap, and GitHub Pages for project development.
          </li>
        </ul>
      </div>
      {/* Beautiful Mind VR App */}
      <div className="font-serif font-bold italic">
        <h3 className="text-xl text-white">Beautiful Mind VR App</h3>
        <p className="text-white text-lg">Universe (Online)</p>
        <p className="text-white text-lg">
          github.com/bretpeters3n/BMind_vrUNITYApp
        </p>
        <p className="text-white text-lg pb-2">2022</p>
        <ul className="font-serif font-medium text-lg not-italic">
          <li>
            • Led the project as a C# developer, spearheading the development of
            a VR application aimed at educating ADHD users on essential life
            skills.
          </li>
          <li>
            • Employed tools, such as Unity, C#, SketchFab, Blender, NovelAI,
            Miro, Audacity, and Premiere Pro to bring the project to fruition.
          </li>
        </ul>
      </div>
      {/* Cat Memory */}
      <div className="font-serif font-bold italic">
        <h3 className="text-xl text-white">Cat Memory</h3>
        <p className="text-white text-lg">github.com/bretpeters3n/cat-memory</p>
        <p className="text-white text-lg">
          Full-Stack Web Development Bootcamp
        </p>
        <p className="text-white text-lg pb-2">2021</p>
        <ul className="font-serif font-medium text-lg not-italic">
          <li>
            • Acted as project lead in developing an application allowing users
            to play a game of memory with cat photos.
          </li>
          <li>
            • Utilized tools, including Javascript, Bootstrap, the Cat API, and
            GitHub Pages.
          </li>
        </ul>
      </div>
      {/* EDUCATION */}
      <PostH2 h2="Education" />
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">
          Bachelor of Fine Arts in Graphic Design |{' '}
        </span>
        University of Minnesota, Duluth, MN
      </p>
      {/* Professional Development/Certifications */}
      <PostH2 h2="Professional Development/Certifications" />
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">
          Full-Stack Web Development Certificate |{' '}
        </span>
        University of Minnesota, Minnesota, MN
      </p>
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">
          UX Certificate |{' '}
        </span>
        Brainco, Minneapolis, MN
      </p>
      <p className="font-serif text-lg pb-2">
        <span className="font-serif font-bold text-white">
          VR App Development, VR App Publishing, Unity, and World Building |{' '}
        </span>
        Universe, Online
      </p>
    </div>
  )
}

export default Resume
