import React from 'react'
import './Home.css'
import myImage from './assets/myimage.jpeg'
import resume from './assets/Bala bharathi M (1).pdf'
import { Link } from 'react-router-dom'
import { LiaLinkedin } from "react-icons/lia"
import { CgMail } from "react-icons/cg"
import { Typewriter } from 'react-simple-typewriter'

function Home() {
  return (
    <div id="home-parent-div">
      <section className="nn-home-parent-section">
        <div className="parent-section-div">
          <p>Bala Bharathi M</p>
        </div>

        <div className="parent-section-description">
            <h1>Hi, I am Bala Bharathi</h1>
         
  <h1 style={{ color: '#ff6a00', fontWeight: 'bold' }}>
    <Typewriter
      words={['Frontend Developer']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </h1>
          <p>I have 3 years of working experience in Frontend Development, specialized in React.</p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/bala-bharathi-m-617134236" target="_blank" rel="noopener noreferrer">
              <LiaLinkedin title='Linkedin' />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bharathimurugan1521@gmail.com" target="_blank"  rel="noopener noreferrer">
              <CgMail title='Mail' />
            </a>
          </div>

          <a href={resume} download="Bala_Bharathi_Resume.pdf">
            <button title='Download Resume' className="resume-button">Download Resume</button>
          </a>
        </div>
      </section>

      <section className="nn-home-child-section">
        <div>
          <nav className="navBar">
            <ul className="navbar-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="image-div">
          <img src={myImage} alt="Profile" />
        </div>
      </section>
    </div>
  )
}

export default Home
