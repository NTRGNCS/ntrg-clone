import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal.js'
import { CircleCheck, LineIcon } from '../components/Icons.jsx'
import Testimonials from '../components/Testimonials.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import { servicesHero, servicesPage, premierServices, otherServices, img } from '../data/content.js'

// Layout matched to the vendor's Our Services page (side-by-side screenshots, Sept 2026).
export default function Services() {
  useReveal()
  return (<>
    <section className="phero phero--notch">
      <div className="phero__shape" aria-hidden="true">
        <div className="phero__bg"><img src={img.expertiseHero} alt="" /></div>
        <div className="phero__scrim" />
      </div>
      <div className="wrap phero__inner phero__inner--col">
        <h1 className="phero__title phero__title--flow"><span>{servicesHero.line1}</span> <span>{servicesHero.line2}</span></h1>
        <p className="phero__sub">{servicesHero.sub}</p>
      </div>
      <img className="phero__triangle" src={img.goldTriangle} alt="" aria-hidden="true" />
    </section>

    {/* Full-width photo -> navy intro -> white cards overlapping onto texture */}
    <section className="spremier">
      <div className="spremier__photo">
        <img src={img.premierServices} alt="" loading="lazy" />
        <img className="spremier__tri" src={img.goldTriangle} alt="" aria-hidden="true" />
      </div>
      <div className="spremier__navy">
        <div className="wrap reveal">
          <h2 className="gold-head gold-text">{servicesPage.premierHeading}</h2>
          <p className="spremier__intro">{servicesPage.premierIntro}</p>
        </div>
      </div>
      <div className="spremier__cardsband">
        <div className="wrap scards reveal">
          {premierServices.map(s => (
            <article className="scard" key={s.title}>
              <LineIcon name={s.icon} className="scard__icon" stroke={1.1} />
              <h3 className="scard__title">{s.title}</h3>
              <p className="scard__body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* White content area with a navy strip on the right; photo straddles the edge */}
    <section className="struly">
      <div className="struly__strip" aria-hidden="true" />
      <span className="xband__tri xband__tri--top" aria-hidden="true" />
      <div className="wrap struly__inner">
        <div className="reveal">
          <h2 className="xhead">{servicesPage.trulyHeading}</h2>
          <p className="struly__sub">{servicesPage.trulySub}</p>
        </div>
        <div className="struly__row">
          {/* Two independent columns (7 + 5), like the vendor, so long items don't open gaps in the other column */}
          <div className="struly__lists reveal">
            {[otherServices.slice(0, 7), otherServices.slice(7)].map((col, i) => (
              <ul className="struly__list" key={i}>
                {col.map(s => <li key={s}><CircleCheck className="struly__tick" /><span>{s}</span></li>)}
              </ul>
            ))}
          </div>
          <div className="struly__media reveal"><img src={img.servicesConsult} alt="" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <Testimonials />

    {/* Cross-links to Expertise and About, as on the vendor page */}
    <section className="scta">
      <div className="wrap scta__list">
        {servicesPage.ctaCards.map((c, i) => (
          <div className={`scta__card reveal${i % 2 ? ' scta__card--rev' : ''}`} key={c.heading}>
            <div className="scta__text">
              <h2 className="xhead">{c.heading}</h2>
              <p>{c.body}</p>
              <Link to={c.to} className="btn btn--gold scta__btn">{c.cta}</Link>
            </div>
            <div className="scta__media"><img src={c.image} alt="" loading="lazy" /></div>
          </div>
        ))}
      </div>
    </section>

    <GetInTouch />
  </>)
}
