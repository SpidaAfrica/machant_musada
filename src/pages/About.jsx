import React from 'react'
export default function About(){
  return (
    <section className="container section">
      <div className="kicker">About</div>
      <h2>Who we are</h2>
      <p className="lead">A multidisciplinary company focused on durable value: business operations, logistics and property.</p>
      <div className="grid two" style={{marginTop:16}}>
        <div className="card"><h3>Mission</h3><p>Deliver dependable services with clarity, speed and integrity.</p></div>
        <div className="card"><h3>Vision</h3><p>Be a trusted brand across Africa for enterprise and real estate solutions.</p></div>
      </div>
    </section>
  )
}
