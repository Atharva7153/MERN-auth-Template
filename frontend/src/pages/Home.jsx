import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export const Home = () => {
  const nav = useNavigate()

  const profile = () => {
    nav('/profile')
  }

  return (
    <div className="home-wrapper">
      <div className="home-glass">
        <h1 className="home-heading">Welcome Home 👋</h1>
        <p className="home-subtext">You’ve successfully logged in.</p>
        <button onClick={profile} className="home-btn">View Profile</button>
      </div>
    </div>
  )
}
