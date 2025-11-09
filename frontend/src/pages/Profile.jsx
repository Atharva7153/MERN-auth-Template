import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {

  const [username, setUsername] = useState()
  const nav = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:5000/auth/profile", {withCredentials : true})
    .then(res => setUsername(res.data.username))
    .catch(()=> nav('/login'))
  }, [])

  const Handlebtn = async ()=>{
    await axios.get('http://localhost:5000/auth/logout', {withCredentials : true})
    nav("/login")
  }
  
  return (
    <div>
        <h1>This is Profile Page</h1>
        <h1>Welcome : {username}</h1>

        <button onClick={Handlebtn}>Logout</button>
    </div>
  )
}
