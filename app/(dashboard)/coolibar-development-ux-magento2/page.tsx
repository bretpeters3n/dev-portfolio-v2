'use client'

import PostH1 from '@/components/PostH1'
import PostH2 from '@/components/PostH2'
import PostImage from '@/components/PostImage'
import PostP from '@/components/PostP'
import PostResources from '@/components/PostResources'
import PostTechSheet from '@/components/PostTechSheet'

const magento2DevelopmentUxCoolibar2 = () => {
  return (
    <div>
      {/* Development & UX @ Coolibar (Magento 2) */}
      <PostH1
        h1="Development & UX @ Coolibar (Magento 2)"
        paragraph="My first development position exposed me to a variety of coding challenges and also allowed me to use my UX skills. Here are some projects I completed on the Coolibar Magento e-commerce site."
      />
      <PostImage
        src="/posts/coolibar-development-imgs/coolibar-dev-1-3.jpeg"
        priority="true"
        figcaption="layouts of various projects that are explained in this post"
      />
      {/* Header redesign */}
      <PostH2
        h2="Header"
        paragraph="My first project at Coolibar involved placing the new logo mockup into our website header. I decided to clean up the entire header to help everything fit and be legible. The redesign involved placing content in dropdown menus and making things like the search bar be visually toggled. Additional things I learned:"
      />
      <ul className="font-serif text-lg list-disc list-outside pl-10 pb-2 list-gap">
        <li>Using javascript efficiently with a Magento install</li>
        <li>Integrating 3rd party Klevu modules into the new design</li>
        <li>
          Correctly creating new and updating existing Magento XML and PHTML
          files
        </li>
      </ul>
      <PostImage
        src="/posts/coolibar-development-imgs/coolibar-dev-2-1.jpeg"
        figcaption="top: Before header redesign • bottom: After header redsign"
      />
      {/* Order confirmation page redesign */}
      <PostH2
        h2="Order confirmation page"
        paragraph="The order confirmation page was the default Magento one when I took this project on. The default order confirmation page is very bare and includes very little information to the customer. We wanted to add branding, a thank you message, shipment information, contact information, a list of ordered items, and a link to current blog posts. Here are some things I learned while completing this project:"
      />
      <ul className="font-serif text-lg list-disc list-outside pl-10 pb-2 list-gap">
        <li>
          Working with classes and methods to organize and pull in order
          information
        </li>
        <li>
          Learned proper PHP syntax for looping and displaying Magento data
        </li>
        <li>
          Pulled in blog information from other portion of site with Javascript
        </li>
      </ul>
      <PostImage
        src="/posts/coolibar-development-imgs/coolibar-dev-3-1.jpeg"
        figcaption="left: Before order confirmation page redesign • right: After order confirmation page redesign"
      />
      <PostH2
        h2="Homepage hero"
        paragraph="Our homepage design had little thought put into it before I started this project. We decided to start by taking the static hero area and installing a carousel there so we could place more content at the top of the page. Additionally, we added a category section below the hero to point users to portions of our products. Here are some things I learned doing this project:"
      />
      <ul className="font-serif text-lg list-disc list-outside pl-10 pb-2 list-gap">
        <li>
          Integrated a third party JS module named Splide into our codebase
        </li>
        <li>
          Followed best practices to our carousel to meet accessibility
          standards
        </li>
        <li>
          Working with our Brand team to make sure we represent ourselves
          properly
        </li>
      </ul>

      <div className="grid grid-cols-1 divide-white/10 divide-y gap-5">
        <PostImage
          src="/posts/coolibar-development-imgs/coolibar-dev-4-1.jpeg"
          figcaption="homepage her redesign in desktop and mobile views"
        />
        <div>
          <PostTechSheet
            h3="Technical Sheet"
            techList={['Magento 2', 'Bootstrap', 'RequireJS', 'PHP']}
          />
        </div>
        <div>
          <PostResources
            h3="Resources"
            online="Https://www.coolibar.com"
            github=""
          />
        </div>
      </div>
    </div>
  )
}

export default magento2DevelopmentUxCoolibar2
