import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

export const Profile = () => {
  const [username, setUsername] = useState('')
  const nav = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/auth/profile", { withCredentials: true })
      .then(res => setUsername(res.data.username))
      .catch(() => nav('/login'))
  }, [])

  const handleLogout = async () => {
    await axios.get('http://localhost:5000/auth/logout', { withCredentials: true })
    nav("/login")
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <h1 className="profile-heading">User Profile</h1>
        <div className="profile-box">
          <p className="profile-label">Welcome,</p>
          <h2 className="profile-username">{username || 'Loading...'}</h2>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  )
}
