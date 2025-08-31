import React from 'react'
import './About.css'

function About() {
  return (
    <div id='about-parent'>
      <h1>About</h1>
      
      <p>
        I’m a <strong>Frontend Developer</strong> with <strong>3+ years of hands-on experience</strong> in building 
        responsive and user-friendly web applications. I’m passionate about creating modern, 
        maintainable, and scalable solutions.
      </p>

      <ul className="about-list">
        <li>✔ Skilled in <strong>HTML, CSS, JavaScript, React.js</strong></li>
        <li>✔ Proficient in <strong>UI/UX principles</strong> & cross-browser compatibility</li>
        <li>✔ Experienced in <strong>performance optimization</strong></li>
        <li>✔ Passionate about writing <strong>clean, maintainable code</strong></li>
        <li>✔ Delivering <strong>high-quality projects on time</strong></li>
        <li>✔ Continuously <strong>learning & adapting</strong> in fast-paced environments</li>
      </ul>
    </div>
  )
}

export default About
