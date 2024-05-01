import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Contactme = () => {
  return (
    <div>

        <h2>Contact me Nested route</h2>

        <Link to="campany">Company</Link> <br/>   <br/> 
        <Link to="channel">Channel</Link>  <br/>   <br/> 
        <Link to="others">Other</Link>  <br/>   <br/> 
        <Outlet/>
    </div>
  )
}

export default Contactme