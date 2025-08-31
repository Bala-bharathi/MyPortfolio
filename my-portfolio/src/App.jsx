import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import {BrowserRouter,Routes, Route,Outlet} from 'react-router-dom'
import GotoHome from './GotoHome'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Normal routes */}
          <Route path="/" element={<Home />} />

          {/* Nested route with layout */}
          <Route element={<LayoutWithGotoHome />}>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
             <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

function LayoutWithGotoHome() {
  return (
    <>
      {/* Child route renders here */}
      <Outlet />  
      {/* Always visible */}
      <GotoHome />  
    </>
  )
}
