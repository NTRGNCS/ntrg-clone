import { useState } from 'react'
import useReveal from '../components/useReveal.js'
import GetInTouch from '../components/GetInTouch.jsx'
import PremierBand from '../components/PremierBand.jsx'
import NewsCarousel from '../components/NewsCarousel.jsx'
import { aboutHero, mission, vision, einstein, leadershipIntro, memorial, leadership, clientsSection, clients, img } from '../data/content.js'

function Leader({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="leader">
      <img className="leader__photo" src={p.photo} alt={p.name} loading="lazy" />
      <div>
        <h3 className="leader__name">{p.name}</h3>
        <div className="leader__role">{p.role}</div>
        <p className="leader__bio">{p.short}</p>
        <button className="leader__toggle" onClick={()=>setOpen(v=>!v)} aria-expanded={open}>{open?'Read less':'Read Full Bio'}</button>
        {open && p.email && (
          <div className="leader__contact">
            <a href={`mailto:${p.email}`}>{p.email}</a>
            <a href={`tel:${p.office.replace(/[^0-9]/g,'')}`}>Office: {p.office}</a>
            <a href={`tel:${p.cell.replace(/[^0-9]/g,'')}`}>Cell: {p.cell}</a>
            {p.linkedin && <a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          </div>
        )}
        {open && <div className="leader__full">{p.full.map((para,i)=><p key={i}>{para}</p>)}</div>}
      </div>
    </article>
  )
}

export default function About() {
  useReveal()
  return (<>
    <section className="phero">
      <div className="phero__bg"><img src={img.expertiseHero} alt="" /></div>
      <div className="phero__scrim" aria-hidden="true" />
      <div className="wrap phero__inner">
        <h1 className="phero__title"><span>{aboutHero.line1}</span><span>{aboutHero.line2}</span></h1>
        <p className="phero__sub">{aboutHero.sub}</p>
      </div>
      <img className="phero__triangle" src={img.goldTriangle} alt="" aria-hidden="true" />
    </section>

    <section>
      <div className="wrap mv">
        <div className="reveal"><h2 className="mv__title">{mission.heading}</h2><p className="mv__body">{mission.body}</p></div>
        <div className="mv__media reveal"><img src={img.mission} alt="" loading="lazy" /></div>
      </div>
    </section>

    <section className="vision-band">
      <div className="wrap mv mv--rev">
        <div className="mv__media reveal"><img src={img.vision} alt="" loading="lazy" /></div>
        <div className="reveal"><h2 className="mv__title gold-text">{vision.heading}</h2><p className="mv__body">{vision.body}</p></div>
      </div>
    </section>

    <section className="section einstein"><div className="wrap"><p className="gold-text reveal">{einstein}</p></div></section>

    {/* IN MEMORIAM — our treatment (Clayton passed 9/30/2025) */}
    <section className="memoriam">
      <div className="wrap memoriam__inner">
        <div className="memoriam__photo reveal"><img src={memorial.photo} alt={memorial.name} loading="lazy" /></div>
        <div className="reveal">
          <div className="memoriam__eyebrow">In Memoriam</div>
          <h2 className="memoriam__name">{memorial.name}</h2>
          <div className="memoriam__role">{memorial.role}</div>
          {memorial.paragraphs.map((para,i)=><p className="memoriam__text" key={i}>{para}</p>)}
        </div>
      </div>
    </section>

    {/* Leadership — Josh (President), Debbie (EVP), Jan */}
    <section className="leadership">
      <div className="wrap">
        <div className="shead reveal"><h2 className="shead__title">{leadershipIntro.heading}</h2><p className="shead__sub">{leadershipIntro.body}</p></div>
        <div className="leaders reveal">
          {leadership.map(p => <Leader p={p} key={p.name} />)}
        </div>
      </div>
    </section>

    <section className="clients">
      <div className="wrap">
        <h2 className="shead__title reveal">{clientsSection.heading}</h2>
        <p className="shead__sub reveal" style={{maxWidth:'52ch',margin:'0.75rem auto 0'}}>{clientsSection.body}</p>
        <div className="clients__grid reveal">
          {clients.map(c => <img key={c.name} src={c.logo} alt={c.name} loading="lazy" />)}
        </div>
      </div>
    </section>

    <PremierBand />
    <NewsCarousel />
    <GetInTouch />
  </>)
}
