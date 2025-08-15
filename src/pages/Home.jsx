import React from 'react'
import Hero from '../components/Hero.jsx'
import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div>
      <Hero />
      <section className="container section">
        <div className="kicker">What we do</div>
        <h2>Our Focus Areas</h2>
        <p className="lead">Operational excellence across shipping, construction logistics and property development.</p>
        <div className="grid four" style={{marginTop:16}}>
          <div className="card"><img src="/images/olass.jpeg" alt="" /><h3>Logistics</h3><p>Reliable movement of goods with transparent timelines and pricing.</p></div>
          <div className="card"><img src="/images/crane in construction site.jpeg" alt="" /><h3>Construction</h3><p>From planning to delivery with a focus on safety and quality.</p></div>
          <div className="card"><img src="/images/Endless field with rows of corn plants growing in the ground.jpeg" alt="" /><h3>Agribusiness</h3><p>Productivity driven by data and market access.</p></div>
          <div className="card"><img src="/images/tech.jpeg" alt="" /><h3>Technology</h3><p>Modern tooling to monitor operations and deliver insight.</p></div>
        </div>
      </section>
      <section className="container section">
        <div className="grid two">
          <div className="card">
            <h3>Real Estate</h3>
            <p>We acquire, develop and manage assets that create value for investors and communities.</p>
            <Link to="/real-estate" className="btn">See properties</Link>
          </div>
          <div className="card">
            <h3>Work with Us</h3>
            <p>We’re building long-term partnerships. Let’s create something great together.</p>
            <Link to="/contact" className="btn secondary">Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
