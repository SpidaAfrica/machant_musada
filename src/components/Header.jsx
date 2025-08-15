import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Header(){
  const [open, setOpen] = React.useState(false)
  React.useEffect(()=>{ const onResize=()=>{ if(window.innerWidth>820) setOpen(false) }; window.addEventListener('resize', onResize); return ()=>window.removeEventListener('resize', onResize)},[])
  const active = ({isActive}) => ({ borderColor: isActive ? 'rgba(14,165,233,.5)' : 'transparent' })
  return (
    <div>
      <div className="nav">
        <Link to="/" className="brand"><img src="/images/logo.png" alt="" className="logo"/><span>Machant Musada</span></Link>
        <nav className="menu">
          <NavLink to="/" style={active}>Home</NavLink>
          <NavLink to="/about" style={active}>About</NavLink>
          <NavLink to="/business" style={active}>Business</NavLink>
          <NavLink to="/real-estate" style={active}>Real&nbsp;Estate</NavLink>
          <NavLink to="/musada" style={active}>Musada</NavLink>
          <NavLink to="/contact" style={active}>Contact</NavLink>
        </nav>
        <button className="menu-btn" onClick={()=>setOpen(v=>!v)} aria-label="Menu">☰ Menu</button>
      </div>
      {open && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={()=>setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={()=>setOpen(false)}>About</NavLink>
          <NavLink to="/business" onClick={()=>setOpen(false)}>Business</NavLink>
          <NavLink to="/real-estate" onClick={()=>setOpen(false)}>Real Estate</NavLink>
          <NavLink to="/musada" onClick={()=>setOpen(false)}>Musada</NavLink>
          <NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>
        </div>
      )}
    </div>
  )
}
