import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <>
     <div id='skills-parent'>
        <h1>Skills</h1>
        <h3>Technical Skills</h3>
        <ul className='skills-list'>
            <li>✔ Proficient in React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind</li>
            <li>✔ Strong understanding of State Management (Redux, Context API)</li>
            <li>✔ Experience with REST APIs, JSON, Axios, Fetch</li>
            <li>✔ Knowledge of Version Control (Git, GitHub)</li>
            <li>✔ Familiar with Vite, Webpack, npm, ESLint</li>
        </ul>

        <h3>Soft Skills</h3>
        <ul className='skills-list'>
            <li>✔ Strong problem-solving and debugging abilities</li>
            <li>✔ Adaptable and quick learner of new technologies</li>
            <li>✔ Detail-oriented and passionate about building user-friendly interfaces</li>
        </ul>
    </div>
    </>
  )
}

export default Skills
