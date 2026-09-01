import useReveal from '../components/useReveal.js'
import { Check, X } from '../components/Icons.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import { expertiseHero, bigQuote, process, difference, comparison, img } from '../data/content.js'
export default function Expertise() {
  useReveal()
  return (<>
    <section className="phero">
      <div className="phero__bg"><img src={img.expertiseHero} alt="" /></div>
      <div className="phero__scrim" aria-hidden="true" />
      <div className="wrap phero__inner">
        <h1 className="phero__title"><span>{expertiseHero.line1}</span><span className="gold-text">{expertiseHero.line2}</span></h1>
        <p className="phero__sub">{expertiseHero.sub}</p>
      </div>
      <img className="phero__triangle" src={img.goldTriangle} alt="" aria-hidden="true" />
    </section>

    <section className="section pullquote"><div className="wrap"><p className="gold-text reveal">{bigQuote}</p></div></section>

    <section className="section process">
      <div className="wrap">
        <div className="process__intro reveal">
          <h2 className="gold-head gold-text">{process.heading}</h2>
          <p>{process.body}</p>
        </div>
        <div className="psteps">
          <div className="psteps__list reveal">
            {process.steps.map(s => (
              <div className="pstep" key={s.label}>
                <div className="pstep__label">{s.label}</div>
                <div className="pstep__body">{s.body}</div>
              </div>
            ))}
          </div>
          <div className="psteps__media reveal"><img src={img.process} alt="" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <div className="diff__intro reveal"><h2 className="gold-head gold-text">{difference.heading}</h2><p>{difference.body}</p></div>
        <div className="diff__grid">
          <div className="diff__media reveal"><img src={img.difference} alt="" loading="lazy" /></div>
          <div className="diff__items reveal">
            {difference.items.map(it => (
              <div className="diff__item" key={it.label}>
                <div className="d-label">{it.label}</div>
                <div className="d-title">{it.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section compare">
      <div className="wrap">
        <div className="compare__head reveal"><h2 className="gold-head gold-text">{comparison.heading}</h2><p>{comparison.sub}</p></div>
        <div className="compare__scroll reveal">
          <table className="ctable">
            <thead><tr>
              <th className="col-label"></th>
              <th className="col-ntrg"><span className="m gold-text">NTRG</span></th>
              <th>{comparison.columns[1]}</th>
              <th>{comparison.columns[2]}</th>
            </tr></thead>
            <tbody>
              {comparison.rows.map(r => (
                <tr key={r.label}>
                  <td className="col-label">{r.label}</td>
                  <td className="col-ntrg"><span className="mk">{r.ntrg ? <Check className="icon-y"/> : <X className="icon-n"/>}</span></td>
                  <td><span className="mk">{r.big ? <Check className="icon-y"/> : <X className="icon-n"/>}</span></td>
                  <td><span className="mk">{r.inhouse ? <Check className="icon-y"/> : <X className="icon-n"/>}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <GetInTouch />
  </>)
}
