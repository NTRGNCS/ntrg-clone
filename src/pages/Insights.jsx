import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal.js'
import GetInTouch from '../components/GetInTouch.jsx'
import { insightsHero, posts } from '../data/content.js'
export default function Insights() {
  useReveal()
  const [feat, ...rest] = posts
  return (<>
    <section className="ihero">
      <div className="wrap ihero__inner">
        <h1 className="ihero__title gold-text reveal">{insightsHero.heading}</h1>
        <p className="ihero__sub reveal">{insightsHero.sub}</p>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <div className="ilist">
          <article className="ifeature reveal">
            <Link to={`/insights/${feat.slug}`} className="pcard__media"><img src={feat.image} alt="" /></Link>
            <div>
              <div className="pcard__date">{feat.date}</div>
              <h3 className="pcard__title" style={{fontSize:'1.5rem',margin:'0.5rem 0 0.75rem'}}><Link to={`/insights/${feat.slug}`}>{feat.title}</Link></h3>
              <p className="pcard__excerpt" style={{fontSize:'0.9rem'}}>{feat.excerpt}</p>
              <Link to={`/insights/${feat.slug}`} className="post-back" style={{marginTop:'1rem'}}>Read more →</Link>
            </div>
          </article>
          {rest.map(p => (
            <article className="pcard reveal" key={p.slug}>
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
      </div>
    </section>
    <GetInTouch />
  </>)
}
