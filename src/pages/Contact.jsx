import useReveal from '../components/useReveal.js'
import ContactForm from '../components/ContactForm.jsx'
import { contactPage, contactInfo, getInTouch, img } from '../data/content.js'
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

    <section className="git" id="contact">
      <div className="git__texture texture-bg" aria-hidden="true" />
      <div className="git__navy" aria-hidden="true" />
      <div className="wrap git__inner">
        <div className="git__left">
          <h3 className="git__heading">{getInTouch.heading}</h3>
          <p className="git__sub">{getInTouch.sub}</p>
          <ContactForm />
        </div>
        <div className="git__right"><img src={img.getInTouch} alt="" loading="lazy" /></div>
      </div>
    </section>

    <section className="section coast"><div className="wrap"><h2 className="gold-text reveal">{contactPage.mapHeading}</h2><p className="reveal">{contactPage.mapSub}</p></div></section>

    <section className="section mapband">
      <div className="wrap">
        <div className="mapband__contacts reveal">
          <div className="cinfo"><div><div className="cinfo__label">Main office</div><div className="cinfo__val">{contactInfo.addressLines.join(', ')}</div></div></div>
          <div className="cinfo"><div><div className="cinfo__label">Phone number</div><div className="cinfo__val"><a href={contactInfo.phoneHref}>{contactInfo.phone}</a></div></div></div>
          <div className="cinfo"><div><div className="cinfo__label">Email address</div><div className="cinfo__val"><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div></div></div>
        </div>
        <div className="mapband__map reveal"><img src={img.usMap} alt="NTRG coverage across the United States" loading="lazy" /></div>
      </div>
    </section>
  </>)
}
