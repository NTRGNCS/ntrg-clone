import useReveal from '../components/useReveal.js'
import GetInTouch from '../components/GetInTouch.jsx'
import { contactPage, img } from '../data/content.js'
export default function Contact() {
  useReveal()
  return (<>
    <section className="chero">
      <div className="chero__bg"><img src={img.contactHero} alt="" /></div>
      <div className="chero__scrim" aria-hidden="true" />
      <div className="chero__notch" aria-hidden="true" />
      <div className="wrap chero__inner">
        <h1 className="chero__title"><span>{contactPage.heroLine1}</span><span className="gold-text">{contactPage.heroLine2}</span></h1>
        <p className="chero__sub">{contactPage.heroSub}</p>
      </div>
      <img className="chero__triangle" src={img.goldTriangle} alt="" aria-hidden="true" />
    </section>

    {/* Phone / email / office now live here (form removed), so the map band no longer repeats them. */}
    <GetInTouch />

    <section className="section coast"><div className="wrap"><h2 className="gold-text reveal">{contactPage.mapHeading}</h2><p className="reveal">{contactPage.mapSub}</p></div></section>

    <section className="section mapband">
      <div className="wrap">
        <div className="mapband__map reveal"><img src={img.usMap} alt="NTRG coverage across the United States" loading="lazy" /></div>
      </div>
    </section>
  </>)
}
