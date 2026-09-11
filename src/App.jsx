import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Expertise from './pages/Expertise.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Insights from './pages/Insights.jsx'
import Post from './pages/Post.jsx'
import Contact from './pages/Contact.jsx'
import Legal from './pages/Legal.jsx'
import { terms, privacy } from './data/legal.js'
import './components/Nav.css'
import './components/Footer.css'
import './styles/pages.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  // Jump (not smooth-scroll) to the top on page change; html has scroll-behavior:smooth for in-page anchors.
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }, [pathname])
  return null
}
export default function App() {
  return (<>
    <ScrollToTop /><Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Legal doc={terms} />} />
        <Route path="/privacy" element={<Legal doc={privacy} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <Footer />
  </>)
}
