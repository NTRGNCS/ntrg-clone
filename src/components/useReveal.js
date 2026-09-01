import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window) || !els.length) { els.forEach(e=>e.classList.add('in')); return }
    const io = new IntersectionObserver((ents)=>ents.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)} }),{threshold:0.1,rootMargin:'0px 0px -5% 0px'})
    els.forEach(e=>io.observe(e)); return ()=>io.disconnect()
  }, [pathname])
}
