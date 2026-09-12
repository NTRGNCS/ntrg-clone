import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
// Client Portal: TaxNav client login (opens in a new tab so the NTRG site stays open).
const PORTAL_URL = 'https://ntrg-taxnav.com/ntrg/index.php'
const links = [
  { to: '/expertise', label: 'Our Expertise' },
  { to: '/services', label: 'Our Services' },
  { to: '/about', label: 'About Us' },
  { to: '/insights', label: 'News & Insights' },
]
export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo" aria-label="NTRG home"><img src="/NTRG-Logo.svg" alt="NTRG" /></Link>
        <nav className="nav__links" aria-label="Primary">
          {links.map(l => <NavLink key={l.to} to={l.to} className={({isActive})=>`nav__link ${isActive?'is-active':''}`}>{l.label}</NavLink>)}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--outline nav__portal" href={PORTAL_URL} target="_blank" rel="noopener noreferrer">Client Portal</a>
          <Link className="btn btn--gold" to="/contact">Contact Us</Link>
        </div>
        <button className={`nav__burger ${open?'is-open':''}`} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button>
      </div>
      <div className={`nav__mobile ${open?'is-open':''}`}>
        {links.map(l => <NavLink key={l.to} to={l.to} className="nav__mobile-link">{l.label}</NavLink>)}
        <a className="nav__mobile-link" href={PORTAL_URL} target="_blank" rel="noopener noreferrer">Client Portal</a>
        <Link className="btn btn--gold" to="/contact" style={{marginTop:'0.75rem'}}>Contact Us</Link>
      </div>
    </header>
  )
}
