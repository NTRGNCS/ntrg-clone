import { useState } from 'react'
export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [f, setF] = useState({ first:'',last:'',email:'',phone:'',inquiry:'',agree:false })
  const up = k => e => setF(s=>({...s,[k]: e.target.type==='checkbox'?e.target.checked:e.target.value}))
  const submit = e => { e.preventDefault(); setSent(true) }
  if (sent) return (
    <div className="cform cform--sent" role="status">
      <h3>Thanks, we&apos;ll be in touch.</h3>
      <p>A member of the NTRG team will reach out shortly.</p>
      <button className="btn btn--gold" onClick={()=>setSent(false)}>Send another message</button>
    </div>
  )
  return (
    <form className="cform" onSubmit={submit} noValidate>
      <div className="cform__row">
        <label className="field"><span>First name <b>*</b></span><input required value={f.first} onChange={up('first')} placeholder="First name" autoComplete="given-name" /></label>
        <label className="field"><span>Last name <b>*</b></span><input required value={f.last} onChange={up('last')} placeholder="Last name" autoComplete="family-name" /></label>
      </div>
      <label className="field"><span>Email <b>*</b></span><input required type="email" value={f.email} onChange={up('email')} placeholder="You@company.com" autoComplete="email" /></label>
      <label className="field"><span>Phone number</span><input type="tel" value={f.phone} onChange={up('phone')} placeholder="+1 (555) 000-0000" autoComplete="tel" /></label>
      <label className="field"><span>General inquiry <b>*</b></span><textarea required rows={4} value={f.inquiry} onChange={up('inquiry')} placeholder="Leave us a message..." /></label>
      <label className="field field--check"><input type="checkbox" required checked={f.agree} onChange={up('agree')} /><span>You agree to our friendly <a href="#privacy">privacy policy</a>.</span></label>
      <button className="btn btn--gold cform__submit" type="submit">Send Message</button>
    </form>
  )
}
