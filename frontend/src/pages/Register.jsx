import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

export const Register = () => {
  const [username, setU] = useState('')
  const [password, setP] = useState('')
  const nav = useNavigate()

  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/auth/register', { username, password })
    nav("/login")
  }

  return (
    <div className="register-wrapper">
      <div className="register-glass">
        <h1 className="register-heading">Create Account</h1>

        <input
          onChange={e => setU(e.target.value)}
          type="text"
          placeholder="Username"
          className="register-input"
        />

        <input
          onChange={e => setP(e.target.value)}
          type="password"
          placeholder="Password"
          className="register-input"
        />

        <button onClick={handleSubmit} className="register-btn">
          Register
        </button>

        <p className="register-footer">
          Already have an account?{" "}
          <b onClick={() => nav('/login')} className="register-login-link">
            Login
          </b>
        </p>
      </div>
    </div>
  )
}
