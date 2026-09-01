import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal.js'
import PremierBand from '../components/PremierBand.jsx'
import NewsCarousel from '../components/NewsCarousel.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import Testimonials from '../components/Testimonials.jsx'
import { homeHero, weAreNtrg, whoWeAre, img } from '../data/content.js'
export default function Home() {
  useReveal()
  return (<>
    <section className="hero">
      <div className="hero__media">
        <video className="hero__video" autoPlay muted playsInline loop poster={img.heroPoster} src={img.heroVideo} />
        <div className="hero__scrim" aria-hidden="true" />
      </div>
      <div className="wrap hero__inner">
        <h1 className="hero__title"><span>{homeHero.line1}</span><span>{homeHero.line2}</span></h1>
        <p className="hero__sub">{homeHero.sub}</p>
      </div>
      <img className="hero__triangle" src={img.goldTriangle} alt="" aria-hidden="true" />
    </section>

    <section className="weare">
      <div className="wrap weare__inner">
        <div className="weare__text reveal">
          <h2 className="weare__title gold-text">{weAreNtrg.heading}</h2>
          <p className="weare__body">{weAreNtrg.body}</p>
          <ul className="weare__list">{weAreNtrg.bullets.map(b=><li key={b}>{b}</li>)}</ul>
          <Link to="/expertise" className="btn btn--gold">Our Expertise</Link>
        </div>
      </div>
    </section>

    <PremierBand />

    <section className="section whowe">
      <div className="wrap whowe__inner">
        <div className="whowe__text reveal">
          <h2 className="whowe__title gold-text">{whoWeAre.heading}</h2>
          <p className="whowe__body">{whoWeAre.body}</p>
          <Link to="/about" className="btn btn--gold">Meet NTRG</Link>
        </div>
      </div>
    </section>

    <Testimonials />
    <NewsCarousel />
    <GetInTouch />
  </>)
}
