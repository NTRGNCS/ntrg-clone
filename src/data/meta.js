// Browser-tab titles and search-result descriptions for every page.
// Descriptions are kept under ~160 characters so Google shows them in full.
import { posts, contactInfo } from './content.js'

const SUFFIX = ' | NTRG'

const pages = {
  '/': {
    title: 'NTRG | Commercial Property Tax Advisors',
    description: 'Commercial property tax advisors with hyper-local experts in all 50 states. NTRG maximizes appeal outcomes and savings for businesses nationwide.',
  },
  '/expertise': {
    title: 'Our Expertise' + SUFFIX,
    description: 'NTRG pairs your portfolio with the best local property tax experts nationwide, backed by one contract, a dual review system, and proprietary technology.',
  },
  '/services': {
    title: 'Our Services' + SUFFIX,
    description: 'Property tax consulting, appeals, tax bill administration, cost segregation, budgeting, litigation support, and more for commercial property owners.',
  },
  '/about': {
    title: 'About Us' + SUFFIX,
    description: 'For over two decades, NTRG has been a relentless advocate for commercial property owners. Learn about our mission, vision, and leadership team.',
  },
  '/insights': {
    title: 'News & Insights' + SUFFIX,
    description: 'Property tax news, industry forecasts, and thought pieces from National Tax Resource Group.',
  },
  '/contact': {
    title: 'Contact Us' + SUFFIX,
    description: `Contact National Tax Resource Group. Corporate office in Addison, Texas, with offices in Houston and Boca Raton. Call ${contactInfo.phone}.`,
  },
  '/terms': {
    title: 'Terms of Use' + SUFFIX,
    description: 'Terms of Use for the National Tax Resource Group website.',
  },
  '/privacy': {
    title: 'Privacy Policy' + SUFFIX,
    description: 'How National Tax Resource Group handles information on its website.',
  },
}

const trim = (s, n = 155) => {
  const clean = s.replace(/\.{2,}$/, '').replace(/\s+/g, ' ').trim()
  if (clean.length <= n) return clean
  return clean.slice(0, clean.lastIndexOf(' ', n)).replace(/[,;:]$/, '') + '\u2026'
}

// Returns { title, description } for a URL path. Unknown paths render the Home page, so they get Home's meta.
export function metaFor(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (pages[path]) return pages[path]
  const m = path.match(/^\/insights\/([^/]+)$/)
  if (m) {
    const post = posts.find(p => p.slug === m[1]) || posts[0]  // Post page falls back to the first post
    return { title: post.title.replace(/\.$/, '') + SUFFIX, description: trim(post.excerpt) }
  }
  return pages['/']
}
