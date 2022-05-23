import React, { useContext, useState } from "react"
import './Header.css'
import StateDropdown from "../StateDropdown/StateDropdown"
import { Link, Redirect, useLocation } from "react-router-dom"
import { FaFlagUsa } from 'react-icons/fa'
import { DataContext } from '../../contexts/DataContext'

const Header = () => {
  const repData = useContext(DataContext)
  const location = useLocation()
  const [selectedState, setSelectedState] = useState('')

  const resetFormsForHome = () => {
    repData.setIsFormSubmitted(false);
    repData.setCurrentQuizResult({})

  }

  return (
    <section className="header">
      <div className="site-title">
        <FaFlagUsa />
        <h1 className="title">We The People</h1>
      </div>

      <StateDropdown setSelectedState={setSelectedState} selectedState={selectedState} />

        {location.pathname === "/results-dashboard" &&
          <Link to="/">
            <button className="home-btn" onClick={() => resetFormsForHome()}>Home</button>
          </Link>}
    </section>
  )
}

export default Header
