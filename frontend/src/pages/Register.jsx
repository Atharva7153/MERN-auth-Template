import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const [username, setU] = useState()
  const [password, setP] = useState()

  const nav = useNavigate()

  const handleSubmit = async ()=>{

    await axios.post('http://localhost:5000/auth/register', {
      username, password
    })

    nav("/login")

  }

  return (
    <div>
        <h1>Register Yourself</h1>

        <input onChange={e => setU(e.target.value)} type="text" placeholder='enter username' />

        <br />

        <input onChange={e => setP(e.target.value)} type="text" placeholder='Enter password' />

        <br />

        <button onClick={handleSubmit}>Register</button>

        <p>Registered already ?? <b onClick={e => nav('/login')}>LOGIN</b></p>
    </div>
  )
}
