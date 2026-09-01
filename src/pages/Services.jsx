import useReveal from '../components/useReveal.js'
import { Check } from '../components/Icons.jsx'
import Testimonials from '../components/Testimonials.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import { servicesHero, premierServices, otherServices, img } from '../data/content.js'
export default function Services() {
  useReveal()
  return (<>
    <section className="phero">
      <div className="phero__bg"><img src={img.servicesConsult} alt="" /></div>
      <div className="phero__scrim" aria-hidden="true" />
      <div className="wrap phero__inner">
        <h1 className="phero__title"><span>{servicesHero.line1}</span><span className="gold-text">{servicesHero.line2}</span></h1>
        <p className="phero__sub">{servicesHero.sub}</p>
      </div>
      <img className="phero__triangle" src={img.goldTriangle} alt="" aria-hidden="true" />
    </section>

    <section className="section">
      <div className="wrap">
        <div className="shead reveal"><h2 className="shead__title gold-text">Our premier services.</h2></div>
        <div className="psvc reveal">
          {premierServices.map((s, i) => (
            <div className="psvc__card" key={s.title}>
              <div className="psvc__num">0{i+1}</div>
              <h3 className="psvc__title">{s.title}</h3>
              <p className="psvc__body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section" style={{background:'#f4f4f2'}}>
      <div className="wrap truly__grid">
        <div className="reveal">
          <h2 className="shead__title gold-text" style={{marginBottom:'1.5rem'}}>We truly do it all.</h2>
          <div className="morelist">
            {otherServices.map(s => (
              <div className="moreitem" key={s}><Check className="tick"/><span>{s}</span></div>
            ))}
          </div>
        </div>
        <div className="truly__media reveal"><img src={img.mission} alt="" loading="lazy" /></div>
      </div>
    </section>

    <Testimonials />
    <GetInTouch />
  </>)
}
