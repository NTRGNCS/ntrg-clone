import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <Link to="/" className="footer__logo" aria-label="NTRG home"><img src="/NTRG-Logo.svg" alt="NTRG" /></Link>
        <nav className="footer__nav" aria-label="Footer">
          <Link to="/expertise">Our Expertise</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/insights">News &amp; Insights</Link>
        </nav>
      </div>
      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()} National Tax Resource Group. All rights reserved.</span>
        <span className="footer__legal"><a href="#terms">Terms</a><a href="#privacy">Privacy</a></span>
      </div>
    </footer>
  )
}
