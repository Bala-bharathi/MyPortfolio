import React from 'react'
import './GotoHome.css'
import { FaRegArrowAltCircleUp } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

function GotoHome() {
  const navigate = useNavigate()

  function gotoHomePage() {
    navigate('/')   // navigate to home route
  }

  return (
    <div className="goto-home" onClick={gotoHomePage}>
      <FaRegArrowAltCircleUp title='Go to Home' className="goto-home-icon" />
    </div>
  )
}
export default GotoHome