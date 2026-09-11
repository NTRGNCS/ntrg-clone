import { Link } from 'react-router-dom'
import { LEGAL_UPDATED } from '../data/legal.js'
import { contactInfo } from '../data/content.js'

// Shared layout for Terms of Use and Privacy Policy: short navy hero + readable 768px text column.
export default function Legal({ doc }) {
  const para = (x, i) => typeof x === 'string'
    ? <p key={i}>{x}</p>
    : <p key={i}><strong>{x.lead}</strong> {x.text}</p>
  return (<>
    <section className="lhero">
      <div className="wrap">
        <h1 className="lhero__title">{doc.title}</h1>
        <p className="lhero__date">Last updated: {LEGAL_UPDATED}</p>
      </div>
    </section>

    <section className="legal">
      <div className="wrap">
        <article className="legal__body">
          {doc.intro.map(para)}
          {doc.sections.map(sec => (
            <section key={sec.h}>
              <h2>{sec.h}</h2>
              {sec.p.map(para)}
              {sec.list && <ul>{sec.list.map(li => <li key={li}>{li}</li>)}</ul>}
            </section>
          ))}
          <section>
            <h2>Contact us</h2>
            <p>{doc.contactIntro}</p>
            <address className="legal__contact">
              <span>National Tax Resource Group, Corporate Office</span>
              {contactInfo.addressLines.map(l => <span key={l}>{l}</span>)}
              <span className="legal__offices">Additional offices: {contactInfo.additionalOffices.join(' and ')}</span>
              <span>Phone: <a href={contactInfo.phoneHref}>{contactInfo.phone}</a></span>
              <span>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></span>
            </address>
          </section>
          <p className="legal__other">
            {doc.slug === 'terms'
              ? <>See also our <Link to="/privacy">Privacy Policy</Link>.</>
              : <>See also our <Link to="/terms">Terms of Use</Link>.</>}
          </p>
        </article>
      </div>
    </section>
    <div className="ndivider" aria-hidden="true" />
  </>)
}
