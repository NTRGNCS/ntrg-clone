import { Link, NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__inner">
          <Link to="/" className="footer__logo" aria-label="NTRG home"><img src="/NTRG-Logo.svg" alt="NTRG" /></Link>
          <nav className="footer__nav" aria-label="Footer">
            <NavLink to="/expertise">Our Expertise</NavLink>
            <NavLink to="/services">Our Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/insights">News &amp; Insights</NavLink>
          </nav>
        </div>
        <div className="footer__base">
          <span>© {new Date().getFullYear()} National Tax Resource Group. All rights reserved.</span>
          <span className="footer__legal"><Link to="/terms">Terms</Link><Link to="/privacy">Privacy</Link></span>
        </div>
      </div>
    </footer>
  )
}
