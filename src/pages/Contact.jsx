import useReveal from '../components/useReveal.js'
import GetInTouch from '../components/GetInTouch.jsx'
import { contactPage, img } from '../data/content.js'

// Layout matched to the vendor's Contact page (Sept 2026 screenshot). The vendor has a form here;
// NTRG removed it, so the Get in touch band shows phone/email/office instead, and the map band
// doesn't repeat those details.
export default function Contact() {
  useReveal()
  return (<>
    <section className="phero phero--notch">
      <div className="phero__shape" aria-hidden="true">
        <div className="phero__bg"><img src={img.contactHero} alt="" /></div>
        <div className="phero__scrim" />
      </div>
      <div className="wrap phero__inner phero__inner--col">
        <h1 className="phero__title phero__title--nowrap"><span>{contactPage.heroLine1}</span><span>{contactPage.heroLine2}</span></h1>
        <p className="phero__sub">{contactPage.heroSub}</p>
      </div>
      <img className="phero__triangle" src={img.goldTriangle} alt="" aria-hidden="true" />
    </section>

    <GetInTouch />

    <section className="coast2">
      <div className="wrap reveal">
        <h2 className="coast2__title">{contactPage.mapHeading}</h2>
        <p className="coast2__sub">{contactPage.mapSub}</p>
      </div>
    </section>

    <section className="mapband2">
      <div className="wrap">
        <img className="mapband2__map reveal" src={img.usMap} alt="Map of the United States showing NTRG's nationwide coverage" loading="lazy" />
      </div>
    </section>
  </>)
}
