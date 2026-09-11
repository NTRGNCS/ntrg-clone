import useReveal from '../components/useReveal.js'
import { X, CircleCheck, LineIcon } from '../components/Icons.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import { expertiseHero, bigQuote, process, difference, comparison, img } from '../data/content.js'

// Layout matched to the vendor's Our Expertise page (side-by-side screenshots, Sept 2026).
export default function Expertise() {
  useReveal()
  const quoteLines = bigQuote.split(/(?<=\.)\s+/) // one sentence per line on desktop
  const mark = (yes, ntrg) => yes
    ? <CircleCheck className={ntrg ? 'icon-y icon-y--ntrg' : 'icon-y'} />
    : <X className="icon-n" />
  return (<>
    <section className="phero phero--notch">
      <div className="phero__shape" aria-hidden="true">
        <div className="phero__bg"><img src={img.expertiseHero} alt="" /></div>
        <div className="phero__scrim" />
      </div>
      <div className="wrap phero__inner phero__inner--col">
        <h1 className="phero__title"><span>{expertiseHero.line1}</span><span>{expertiseHero.line2}</span></h1>
        <p className="phero__sub">{expertiseHero.sub}</p>
      </div>
      <img className="phero__triangle" src={img.goldTriangle} alt="" aria-hidden="true" />
    </section>

    <section className="section pullquote">
      <div className="wrap"><p className="gold-text reveal">{quoteLines.map(l => <span key={l}>{l} </span>)}</p></div>
    </section>

    {/* Process + difference share a band: content on the left, textured strip on the right. */}
    <div className="xband">
      <div className="xband__main">
        <section className="xproc">
          <div className="xcol">
            <div className="reveal">
              <h2 className="gold-head gold-text">{process.heading}</h2>
              <p className="xlead">{process.body}</p>
            </div>
            <div className="xsteps reveal">
              {process.steps.map(s => (
                <div className="xstep" key={s.label}>
                  <LineIcon name={s.icon} className="xicon" />
                  <div>
                    <h3 className="xstep__title">{s.label}</h3>
                    <p className="xstep__body">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <img className="ximg reveal" src={img.process} alt="" loading="lazy" />
          </div>
        </section>

        <section className="xdiff">
          <div className="xcol">
            <div className="reveal">
              <h2 className="xhead">{difference.heading}</h2>
              <p className="xlead">{difference.body}</p>
            </div>
            <div className="xitems reveal">
              {difference.items.map(it => (
                <div className="xitem" key={it.label}>
                  <LineIcon name={it.icon} className="xicon" />
                  <div>
                    <div className="xitem__label">{it.label}</div>
                    <h3 className="xitem__title">{it.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <img className="ximg reveal" src={img.difference} alt="" loading="lazy" />
          </div>
        </section>
      </div>
      <span className="xband__tri xband__tri--top" aria-hidden="true" />
      <span className="xband__tri xband__tri--bottom" aria-hidden="true" />
    </div>

    <section className="section compare">
      <div className="wrap">
        <div className="compare__head reveal"><h2 className="gold-head gold-text">{comparison.heading}</h2><p>{comparison.sub}</p></div>
        <div className="compare__scroll reveal">
          <table className="ctable">
            <thead><tr>
              <th className="col-label"><span className="sr-only">Feature</span></th>
              <th className="col-ntrg"><img className="ctable__logo" src="/NTRG-Logo-white.svg" alt="NTRG" /></th>
              {comparison.columns.slice(1).map(c => <th key={c.join(' ')}>{c.map(line => <span className="ctable__hl" key={line}>{line}</span>)}</th>)}
            </tr></thead>
            <tbody>
              {comparison.rows.map(r => (
                <tr key={r.label}>
                  <td className="col-label">{r.label}</td>
                  <td className="col-ntrg"><span className="mk">{mark(r.ntrg, true)}</span></td>
                  <td><span className="mk">{mark(r.big)}</span></td>
                  <td><span className="mk">{mark(r.inhouse)}</span></td>
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
