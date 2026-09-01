import ContactForm from './ContactForm.jsx'
import { getInTouch, img } from '../data/content.js'
export default function GetInTouch() {
  return (
    <section className="git" id="contact">
      <div className="wrap git__inner">
        <div className="git__left">
          <h3 className="git__heading">{getInTouch.heading}</h3>
          <p className="git__sub">{getInTouch.sub}</p>
          <ContactForm />
        </div>
        <div className="git__right"><img src={img.getInTouch} alt="" loading="lazy" /></div>
      </div>
    </section>
  )
}
