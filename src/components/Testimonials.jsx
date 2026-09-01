import { useState, useEffect, useRef } from 'react'
import { testimonials } from '../data/content.js'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  // Their carousel: 5s autoplay, infinite loop, pauses on hover.
  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => setI(n => (n + 1) % testimonials.length), 5000)
    return () => clearInterval(timer.current)
  }, [paused])

  const t = testimonials[i]
  return (
    <section className="section tstory"
             onMouseEnter={() => setPaused(true)}
             onMouseLeave={() => setPaused(false)}>
      <div className="wrap">
        <h2 className="tstory__head reveal">What our clients have to say about NTRG.</h2>
        <blockquote className="tstory__quote gold-text">&ldquo;{t.quote}&rdquo;</blockquote>
        <div className="tstory__cite">{t.name} - {t.title}</div>
        <div className="tstory__dots" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, n) => (
            <button key={n}
                    className={'tstory__dot' + (n === i ? ' is-active' : '')}
                    aria-label={`Testimonial ${n + 1}`}
                    aria-selected={n === i}
                    role="tab"
                    onClick={() => setI(n)} />
          ))}
        </div>
      </div>
    </section>
  )
}
