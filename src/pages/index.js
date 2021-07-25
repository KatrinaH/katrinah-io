import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../fontawesome'

import MainLayout from '../components/mainLayout'

const IndexPage = () => {
  return (
    <MainLayout pageTitle="Home">
      <div className="hero">
        <StaticImage
          className="selfie"
          alt="Photo of Katrina H."
          src="../images/katrina.png"
        />
        <div className="heroText">
          <h1 className="heroTagline">Hello, I’m Katrina, a Front End Developer + UI/UX Designer.</h1>
          <p className="heroBody">With a career history of pushing code to private government repos, I’m no stranger to working in full stack javascript environments. I also have experience in UI/UX design to round out my creative tool belt.</p>
        </div>
      </div>

      <div id="work">
        <section>
          <span className="sectionTitle">Work</span>

        </section>
      </div>

      <div id="experience">
        <section>
          <span className="sectionTitle">Experience</span>
        </section>
      </div>

      <div id="connect">
        <section>
          <span className="sectionTitle">Connect</span>
          <ul className="iconList">
            <li><a href="https://www.linkedin.com/in/katrinahussain"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" className="circle-icon"/></a></li>
            <li><a href="https://github.com/KatrinaH"><FontAwesomeIcon icon={['fab', 'github']} size="lg" className="circle-icon"/></a></li>
            <li><a href="https://www.behance.net/katrinahussain"><FontAwesomeIcon icon={['fab', 'behance']} size="lg" className="circle-icon"/></a></li>
            <li><a href="https://www.instagram.com/kamarycreative"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" className="circle-icon"/></a></li>
          </ul>
          <p>If you’re interested in working together, <a href="mailto:katrina@kamarycreative.com">get in touch</a>!</p>
        </section>
      </div>
    </MainLayout>
  )
}

export default IndexPage