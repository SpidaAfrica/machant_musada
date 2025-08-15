import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer(){
  return (
    <div className="row">
      <div>&copy; {new Date().getFullYear()} Machant Musada</div>
      <nav style={{display:'flex',gap:12,flexWrap:'wrap'}}>
        <Link to="/about">About</Link>
        <Link to="/business">Business</Link>
        <Link to="/real-estate">Real Estate</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}
