import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [username, setU] = useState()
  const [password, setP] = useState()
  const nav = useNavigate()

  
  const handleSubmit = async () =>{
    axios.post("http://localhost:5000/auth/login", {
      username, password
    }, {withCredentials : true})
    .then(res => {
      alert("login Succesfull"),
      nav("/")
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
        <h1>Login</h1>

        <input onChange={e => setU(e.target.value)} type="text" placeholder='enter username' />

        <br />

        <input onChange={e => setP(e.target.value)} type="text" placeholder='Enter password' />

        <br />

        <button onClick={handleSubmit}>Login</button>


        <p>New here?? <b onClick={e => nav("/register")}>Register Now</b></p>

        
    </div>
  )
}

export default Login