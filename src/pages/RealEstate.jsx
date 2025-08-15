import React from 'react'
export default function RealEstate(){
  return (
    <section className="container section">
      <div className="kicker">Real Estate</div>
      <h2>Selected projects</h2>
      <div className="grid">
        <article className="card"><img src="/images/ggs.jpeg" alt="" /><h3>Urban Residences</h3><p>High-efficiency apartments designed for comfort and rental yield.</p></article>
        <article className="card"><img src="/images/eer.png" alt="" /><h3>Commercial Spaces</h3><p>Flexible floorplates for growing businesses and retail experiences.</p></article>
        <article className="card"><img src="/images/Donna Jos Sia.jpeg" alt="" /><h3>Mixed-use</h3><p>Live-work developments with access to amenities and transport.</p></article>
      </div>
    </section>
  )
}
