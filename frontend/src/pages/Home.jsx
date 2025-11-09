import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const nav = useNavigate()

  const profile = ()=>{
    nav('/profile')
  }
  return (
    <div>
      <h1>This is home Page</h1>
      <button onClick={profile}>View Profile</button>
    </div>
  )
}
