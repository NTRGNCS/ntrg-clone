import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal.js'
import { insightsHero, posts } from '../data/content.js'

// Layout matched to the vendor's News & Insights page (Sept 2026 screenshot):
// navy hero, full-width featured post overlapping it, two-up cards, gold rule above the footer.
function PostCard({ p, feature = false }) {
  const href = `/insights/${p.slug}`
  return (
    <article className={`ncard reveal${feature ? ' ncard--feature' : ''}`}>
      <Link to={href} className="ncard__media" tabIndex={-1} aria-hidden="true"><img src={p.image} alt="" loading={feature ? 'eager' : 'lazy'} /></Link>
      <div className="ncard__meta"><span>{p.date}</span><span>{p.author}</span></div>
      <div className="ncard__row">
        <h2 className="ncard__title"><Link to={href}>{p.title}</Link></h2>
        <Link to={href} className="ncard__arrow" aria-label={`Read: ${p.title}`}>↗</Link>
      </div>
      <p className="ncard__excerpt">{p.excerpt}</p>
    </article>
  )
}

export default function Insights() {
  useReveal()
  const [feat, ...rest] = posts
  return (<>
    <section className="nhero">
      <div className="wrap">
        <h1 className="nhero__title">{insightsHero.heading}</h1>
        <p className="nhero__sub">{insightsHero.sub}</p>
      </div>
    </section>

    <section className="nlist">
      <div className="wrap">
        <PostCard p={feat} feature />
        <div className="ngrid">{rest.map(p => <PostCard p={p} key={p.slug} />)}</div>
      </div>
    </section>

    <div className="ndivider" aria-hidden="true" />
  </>)
}
