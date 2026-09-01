import { Link } from 'react-router-dom'
import { premierServicesBlurb, img } from '../data/content.js'
export default function PremierBand() {
  return (
    <section className="premier">
      <div className="wrap premier__inner">
        <div className="premier__card reveal">
          <div className="premier__text">
            <h2 className="premier__title">{premierServicesBlurb.heading}</h2>
            <p className="premier__body">{premierServicesBlurb.body}</p>
            <Link to="/services" className="btn btn--gold">See Our Services</Link>
          </div>
          <div className="premier__media"><img src={img.premierServices} alt="" loading="lazy" /></div>
        </div>
      </div>
      <img className="premier__triangle" src={img.goldTriangle} alt="" aria-hidden="true" />
    </section>
  )
}
