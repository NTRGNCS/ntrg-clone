export function Check({ className='' }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>)
}
export function X({ className='' }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>)
}
export function CircleCheck({ className='' }) {
  return (<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>)
}

// Outline icons for the Expertise page (process steps + differentiators).
const paths = {
  document: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 11h8"/><path d="M8 15h8"/><path d="M8 19h5"/></>,
  exchange: <><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></>,
  globe:    <><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></>,
  pin:      <><path d="M18 9.5c0 4-6 9.5-6 9.5s-6-5.5-6-9.5a6 6 0 0 1 12 0Z"/><circle cx="12" cy="9.5" r="2.2"/><path d="M8 17.5c-2.4.4-4 1.2-4 2.1C4 20.9 7.6 22 12 22s8-1.1 8-2.4c0-.9-1.6-1.7-4-2.1"/></>,
  search:   <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>,
  fileCheck:<><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7"/><path d="M14 2v4a2 2 0 0 0 2 2h4v5"/><path d="M8 10h6"/><path d="M8 14h4"/><circle cx="18" cy="18" r="3"/><path d="m16.8 18 .9.9 1.6-1.7"/></>,
  coins:    <><ellipse cx="9" cy="5" rx="6" ry="2.5"/><path d="M3 5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5"/><path d="M3 9v4c0 1.4 2.7 2.5 6 2.5"/><path d="M3 13v4c0 1.4 2.7 2.5 6 2.5"/><ellipse cx="15" cy="13" rx="6" ry="2.5"/><path d="M9 13v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-6"/><path d="M9 16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5"/></>,
  target:   <><circle cx="12" cy="12" r="9"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/><path d="M12 8.5 15.5 12 12 15.5 8.5 12Z"/></>,
  // Services page premier cards
  consult:  <><circle cx="7" cy="10" r="2.6"/><path d="M2.5 21v-1.8a4.5 4.5 0 0 1 9 0V21"/><path d="M13 3h8v6.5h-4.2L14.5 12V9.5H13Z"/><path d="M15.2 5.6h3.6M15.2 7.4h2.4"/></>,
  building: <><path d="M3 21V4h8.5v17"/><path d="M5.6 7.2h1.2M8.6 7.2h1.2M5.6 10.6h1.2M8.6 10.6h1.2M5.6 14h1.2M8.6 14h1.2"/><circle cx="17" cy="11.5" r="2.4"/><path d="M13.4 21v-2.6a3.6 3.6 0 0 1 7.2 0V21"/><path d="M2 21h20"/></>,
  appeals:  <><path d="M8 3h9l3 3v13H8Z"/><path d="M17 3v3h3"/><path d="M5 6.5V21h11"/><path d="M11 10h6M11 13h6M11 16h3.5"/></>,
  monitor:  <><rect x="2" y="4" width="20" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/><path d="m6.5 13.5 3-3.5 2.5 2 5-5"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></>,
  receipt:  <><path d="M5 2h14v20l-2.3-1.5L14.3 22 12 20.5 9.7 22l-2.4-1.5L5 22Z"/><path d="M9 7h6M9 11h6M9 15h3.5"/></>,
}
export function LineIcon({ name, className='', stroke=1.4 }) {
  return (<svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>)
}
