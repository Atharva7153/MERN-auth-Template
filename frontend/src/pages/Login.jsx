import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const [username, setU] = useState('')
  const [password, setP] = useState('')
  const nav = useNavigate()

  const handleSubmit = async () => {
    axios.post("http://localhost:5000/auth/login", { username, password }, { withCredentials: true })
      .then(res => {
        alert("Login Successful")
        nav("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="login-wrapper">
      <div className="login-glass">
        <h1 className="login-heading">Welcome Back</h1>

        <input
          onChange={e => setU(e.target.value)}
          type="text"
          placeholder="Username"
          className="login-input"
        />

        <input
          onChange={e => setP(e.target.value)}
          type="password"
          placeholder="Password"
          className="login-input"
        />

        <button onClick={handleSubmit} className="login-btn">Login</button>

        <p className="login-footer">
          New here?{" "}
          <b onClick={() => nav("/register")} className="login-register-link">
            Register Now
          </b>
        </p>
      </div>
    </div>
  )
}

export default Login
