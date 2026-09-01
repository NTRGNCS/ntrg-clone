import { useState } from 'react'
import { Link } from 'react-router-dom'
import { posts, insightsBlurb } from '../data/content.js'
export default function NewsCarousel() {
  const [i, setI] = useState(0)
  const prev = () => setI(v => (v-1+posts.length)%posts.length)
  const next = () => setI(v => (v+1)%posts.length)
  const shown = [0,1,2].map(k => posts[(i+k)%posts.length])
  return (
    <section className="section news">
      <div className="wrap">
        <div className="news__head reveal">
          <div><h3 className="news__title">{insightsBlurb.heading}</h3><p className="news__sub">{insightsBlurb.sub}</p></div>
          <Link to="/insights" className="btn btn--gold">View All Posts</Link>
        </div>
        <div className="news__grid reveal">
          {shown.map(p => (
            <article className="pcard" key={p.slug}>
              <Link to={`/insights/${p.slug}`} className="pcard__media"><img src={p.image} alt="" loading="lazy" /></Link>
              <div className="pcard__body">
                <div className="pcard__date">{p.date}</div>
                <div className="pcard__row">
                  <h4 className="pcard__title"><Link to={`/insights/${p.slug}`}>{p.title}</Link></h4>
                  <Link to={`/insights/${p.slug}`} className="pcard__arrow" aria-label={p.title}>↗</Link>
                </div>
                <p className="pcard__excerpt">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="news__nav">
          <button onClick={prev} aria-label="Previous">←</button>
          <button onClick={next} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  )
}
