import React from 'react'
import { Link } from 'react-router-dom'
export default function Hero(){
  return (
    <section className="container section hero">
      <div>
        <span className="badge">Welcome</span>
        <h1 className="title">MERCHANT MUSADA WORLD LIMITED</h1>
        <p className="subtitle">It derives a great pleasure,to take this Medium,to express our gratitude 
                 for choosing Mechant musada world limited as your business partner,We strive to
                 provide reliable quality service through continual improvement and consider customer
                 satisfaction as our highest priority.</p>
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
