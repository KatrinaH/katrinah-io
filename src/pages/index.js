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
          <p className="heroBody">With a career history of pushing code to private government repos, I’m no stranger to working in full stack javascript environments. I also have experience in UI/UX design to round out my tech &amp; creative tool belt.</p>
        </div>
      </div>

      {/* <div id="work">
        <section>
          <span className="sectionTitle">Work</span>

        </section>
      </div> */}

      <div id="experience">
        <section>
          <span className="sectionTitle">Recent Experience</span>
          <div className="job">
            <h2>2021 &bull; Sr. UI/UX Developer</h2>
            <h3>Peraton</h3>
            <p>Worked with a team to design and build a new UI interface for a legacy application.</p>
          </div>
          <div className="job">
            <h2>2018-2021 &bull; Sr. UI/UX Developer</h2>
            <h3>Northrop Grumman</h3>
            <p>Contributed to the redesign and UI architecture of a high priority customer facing application. Developed client side UI functionality using React, Redux and Sass. </p>
          </div>
          <div className="job">
            <h2>2015-<span className="textHighlight">Present</span> &bull; Founder + Creative Director</h2>
            <h3>Kamary Creative, LLC.</h3>
            <p>Designing and building websites for non-profit agencies, creatives and mission driven entrepreneurs.</p>
          </div>          
        </section>
      </div>

      <div id="connect">
        <section>
          <p>If you’re interested in working together, <a href="mailto:katrina@kamarycreative.com?subject=Found your website - katrinah.io&hellip;">get in touch</a>!</p>

          <ul className="iconList">
            <li><a href="https://www.linkedin.com/in/katrinahussain"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" className="circle-icon"/></a></li>
            <li><a href="https://github.com/KatrinaH"><FontAwesomeIcon icon={['fab', 'github']} size="lg" className="circle-icon"/></a></li>
            <li><a href="https://www.behance.net/katrinahussain"><FontAwesomeIcon icon={['fab', 'behance']} size="lg" className="circle-icon"/></a></li>
            <li><a href="https://www.instagram.com/kamarycreative"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" className="circle-icon"/></a></li>
          </ul>
        </section>
      </div>
    </MainLayout>
  )
}

export default IndexPage