import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Business from './pages/Business.jsx'
import RealEstate from './pages/RealEstate.jsx'
import Musada from './pages/Musada.jsx'
import Contact from './pages/Contact.jsx'

export default function App(){
  return (
    <div className="app">
      <header className="header"><div className="container"><Header/></div></header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/business" element={<Business/>} />
          <Route path="/real-estate" element={<RealEstate/>} />
          <Route path="/musada" element={<Musada/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<div className="container"><div className="card">Not Found</div></div>} />
        </Routes>
      </main>
      <footer className="footer"><div className="container"><Footer/></div></footer>
    </div>
  )
}
