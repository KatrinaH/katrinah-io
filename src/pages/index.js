import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../fontawesome'

import MainLayout from '../components/mainLayout'

const IndexPage = () => {
  return (
    <MainLayout pageTitle="Home">
      <div className="hero">
        <StaticImage
          className="selfie"
          alt="Picture of Katrina H."
          src="../images/katrina.png"
        />
        <div className="heroText">
          <h1 className="heroTagline">Hello, I’m Katrina, a Front End Developer + UI/UX Designer.</h1>
          <p className="heroBody">With a career history of pushing code to private government repos, I’m no stranger to working in full stack javascript environments. I also have experience in UI/UX design to round out my creative tool belt.</p>
        </div>
      </div>

      <div className="work">

      </div>

      <div className="experience">

      </div>

      <div className="connect">
        
      </div>
    </MainLayout>
  )
}

export default IndexPage