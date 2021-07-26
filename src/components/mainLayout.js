import React from 'react'
import '../fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from 'gatsby-plugin-image'
import { GrGatsbyjs, GrReactjs } from 'react-icons/gr'
import { FaSass } from 'react-icons/fa'
import '../components/layout.scss'


import { Link } from 'gatsby'

const MainLayout = ({ pageTitle, children  }) => {
  return (
    <main>
      <title>katrinah.io | {pageTitle}</title>
      <header>
        <Link to="/">
          <StaticImage
            className="logo"
            alt="Katrina H."
            src="../images/logo.png"
          />
        </Link>
        <nav>
          <ul>
            {/* <li><Link to="/#work">WORK</Link></li> */}
            <li><Link to="/#experience">EXPERIENCE</Link></li>
            <li><Link to="/#connect">CONNECT</Link></li>
          </ul>
        </nav>
      </header>
      {children}
      
      <footer>
        <p>&copy; {new Date().getFullYear()} &bull; Made with <FontAwesomeIcon icon={['far', 'heart']} size="1x" /> by Katrina H.</p><br />
        <p>Built with <GrGatsbyjs/> <GrReactjs /> <FaSass /></p>
      </footer>
    </main>
  )
}

export default MainLayout