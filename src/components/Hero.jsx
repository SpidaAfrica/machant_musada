import React from 'react'
import { Link } from 'react-router-dom'
export default function Hero(){
  return (
    <section className="container section hero">
      <div>
        <span className="badge">Welcome</span>
        <h1 className="title">Smart solutions in business & real estate.</h1>
        <p className="subtitle">We connect opportunities, capital and people—built with modern tech and human insight.</p>
        <div className="cta">
          <Link to="/business" className="btn">Explore Business</Link>
          <Link to="/real-estate" className="btn secondary">Real Estate</Link>
        </div>
      </div>
      <div className="card">
        <img src="/images/ggg.jpeg" alt="Showcase" />
      </div>
    </section>
  )
}
