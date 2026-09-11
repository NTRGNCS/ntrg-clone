import { getInTouch, contactInfo, img } from '../data/content.js'

// Contact form removed by request. This band now gives direct ways to reach NTRG.
export default function GetInTouch() {
  const mapsHref = 'https://maps.google.com/?q=' + encodeURIComponent(contactInfo.addressLines.join(', '))
  return (
    <section className="git" id="contact">
      <div className="wrap git__inner">
        <div className="git__left">
          <h3 className="git__heading">{getInTouch.heading}</h3>
          <p className="git__sub">{getInTouch.sub}</p>
          <dl className="gcontact">
            <div className="gcontact__row">
              <dt>Phone</dt>
              <dd><a href={contactInfo.phoneHref}>{contactInfo.phone}</a></dd>
            </div>
            <div className="gcontact__row">
              <dt>Email</dt>
              <dd><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></dd>
            </div>
            <div className="gcontact__row">
              <dt>Main office</dt>
              <dd><a href={mapsHref} target="_blank" rel="noreferrer">
                {contactInfo.addressLines.map(l => <span key={l}>{l}</span>)}
              </a></dd>
            </div>
          </dl>
          <a className="btn btn--gold gcontact__cta" href={`mailto:${contactInfo.email}`}>Email Us</a>
        </div>
        <div className="git__right"><img src={img.getInTouch} alt="" loading="lazy" /></div>
      </div>
    </section>
  )
}
