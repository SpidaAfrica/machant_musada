import React from 'react'
import Hero from '../components/Hero.jsx'
import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div>
      <Hero />
      <section className="container section">
        <div className="kicker">How We Work</div>
        <h2>Our Work Areas</h2>
        <p className="lead">Operational excellence across shipping, construction logistics and property development.</p>
        <div className="grid four" style={{marginTop:16}}>
          <div className="card"><img src="/images/1.png" alt="" /><h3>CLIENT'S BENEFIT</h3><p>We aim to provide cost effective assignments for our clients,to
                    constantly provide updated information's and to ensure clients
                    satisfaction at each task.</p></div>
          <div className="card"><img src="/images/5.png" alt="" /><h3>PROFESSIONALISM</h3><p>We aim to help our clients with our ability & expertise in specialized
                areas of business by maintaining our own high professinal standard.</p></div>
          <div className="card"><img src="/images/3.png" alt="" /><h3>INNOVATION</h3><p>We aim to use all our resources,to encourage our team spirit within the organization and assist
   our clients with thier business develoment in the most innovative & creative manner.</p></div>
          <div className="card"><img src="/images/2.png" alt="" /><h3>PRINCIPALITY</h3><p>We aim to support our clients with easy friendly pratical solutions to their
        Logistical requirements that secure their objectives at the best timing &
        ideal costs.</p></div>
          <div className="card"><img src="/images/4.png" alt="" /><h3>PARTNERSHIP</h3><p>We aim towards success by adopting exact standards at each steps & we accept
        only the best of everything we do,offer or provide.</p></div>
          <div className="card"><img src="/images/6.png" alt="" /><h3>SERVICES</h3><p>Over years,Mechant Musada world LTD has been providing practical solutions
        related to shorebase operations,Logistics support,customs issues,marine
        charting,warehouse development,facilities management and systems implementation.</p></div>
        </div>
      </section>
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
