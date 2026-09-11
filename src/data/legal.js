// Terms of Use and Privacy Policy for the NTRG website.
// Written Sept 2026 to match how the site actually works: informational only, no forms,
// no cookies, no analytics or ad trackers; hosted on Vercel; fonts from Google Fonts;
// Client Portal is a separate system (WigleyHub).
// If analytics, a contact form, or cookies are added later, update the Privacy Policy.
// Recommended: have NTRG's counsel review before relying on these documents.

export const LEGAL_UPDATED = 'September 11, 2026'

export const terms = {
  slug: 'terms',
  title: 'Terms of Use',
  intro: [
    `These Terms of Use (“Terms”) govern your use of the National Tax Resource Group website (the “Site”). National Tax Resource Group is referred to in these Terms as “NTRG,” “we,” “us,” or “our.” By using the Site, you agree to these Terms. If you do not agree, please do not use the Site.`,
  ],
  sections: [
    {
      h: 'About this Site',
      p: [
        `The Site provides general information about NTRG and the commercial property tax services we offer. NTRG provides services only under a written engagement agreement with each client. Nothing on the Site is an offer to provide services on particular terms, and the terms of any engagement are set out in that client’s agreement.`,
      ],
    },
    {
      h: 'Information only, not professional advice',
      p: [
        `Content on the Site, including articles, news, and descriptions of property tax processes, is for general informational purposes only. It is not legal, tax, accounting, appraisal, or other professional advice, and it should not be relied on as a substitute for advice about your specific properties or circumstances. Property tax laws, assessment practices, and appeal deadlines vary by state and jurisdiction and change over time.`,
        `Using the Site, or contacting us by phone or email, does not create a client relationship with NTRG. A client relationship begins only when NTRG and the client sign an engagement agreement.`,
      ],
    },
    {
      h: 'Results and testimonials',
      p: [
        `Client testimonials on the Site reflect the individual experiences of those clients. Property tax outcomes depend on the facts of each property, the applicable jurisdiction, and many other factors. Past results do not guarantee similar results in the future.`,
      ],
    },
    {
      h: 'Accuracy of information',
      p: [
        `We work to keep the Site accurate and current, but we do not guarantee that all content is complete, accurate, or up to date. Articles reflect information available when they were published and may not reflect later changes in law or practice. We may update, change, or remove content at any time without notice.`,
      ],
    },
    {
      h: 'Client Portal and other websites',
      p: [
        `The Client Portal link on the Site takes you to a separate system. Access to and use of the portal are governed by the portal’s own terms and by any agreement between NTRG and its clients, not by these Terms.`,
        `The Site also links to third-party websites, such as LinkedIn and Google Maps. We do not control those websites and are not responsible for their content, policies, or practices. Your use of them is at your own risk and subject to their terms.`,
      ],
    },
    {
      h: 'Intellectual property',
      p: [
        `The Site and its content, including text, graphics, logos, images, and design, are owned by NTRG or used with permission, and are protected by intellectual property laws. The NTRG name and logo, and the names of NTRG’s products and services, are trademarks or trade names of NTRG.`,
        `You may view and print pages from the Site for your own personal or internal business use. You may not otherwise copy, reproduce, modify, distribute, or publicly display Site content, or use NTRG’s names or logos, without our prior written permission.`,
      ],
    },
    {
      h: 'Acceptable use',
      p: [`When using the Site, you agree not to:`],
      list: [
        'use the Site for any unlawful purpose or in violation of these Terms;',
        'attempt to gain unauthorized access to the Site, its servers, or any related systems;',
        'interfere with or disrupt the operation or security of the Site;',
        'use automated means, such as bots or scrapers, to copy or collect content from the Site without our permission; or',
        'misrepresent your identity or affiliation when contacting NTRG.',
      ],
    },
    {
      h: 'Disclaimer of warranties',
      p: [
        `The Site and its content are provided “as is” and “as available.” To the fullest extent permitted by law, NTRG disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement. We do not warrant that the Site will be uninterrupted, secure, or free of errors or harmful components.`,
      ],
    },
    {
      h: 'Limitation of liability',
      p: [
        `To the fullest extent permitted by law, NTRG and its owners, employees, consultants, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, or savings, arising out of or related to your use of, or inability to use, the Site or its content. This limitation applies to use of the Site only and does not change the terms of any engagement agreement between NTRG and a client.`,
      ],
    },
    {
      h: 'Indemnification',
      p: [
        `You agree to indemnify and hold harmless NTRG and its owners, employees, consultants, and agents from any claims, losses, or expenses, including reasonable attorneys’ fees, arising from your violation of these Terms or your misuse of the Site.`,
      ],
    },
    {
      h: 'Governing law',
      p: [
        `These Terms are governed by the laws of the State of Texas, without regard to its conflict of law rules. Any dispute arising out of or relating to these Terms or the Site will be brought in the state or federal courts located in Dallas County, Texas, and you consent to the jurisdiction of those courts.`,
      ],
    },
    {
      h: 'Changes to these Terms',
      p: [
        `We may update these Terms from time to time. When we do, we will post the updated version on this page and change the “Last updated” date. Your continued use of the Site after changes are posted means you accept the updated Terms.`,
      ],
    },
  ],
  contactIntro: 'If you have questions about these Terms, please contact us:',
}

export const privacy = {
  slug: 'privacy',
  title: 'Privacy Policy',
  intro: [
    `This Privacy Policy explains how National Tax Resource Group (“NTRG,” “we,” “us,” or “our”) handles information in connection with our website (the “Site”). We keep this simple: the Site is informational, it has no sign-up or contact forms, and it does not use cookies, analytics, or advertising trackers.`,
    `Information that clients provide as part of an engagement with NTRG is handled under that client’s engagement agreement and applicable law. The Client Portal is a separate system with its own terms.`,
  ],
  sections: [
    {
      h: 'Information we collect',
      p: [{ lead: 'Information you choose to send us.', text: `If you contact us by email or phone, we receive the information you provide, such as your name, company, email address, phone number, and details about your properties or questions.` },
        { lead: 'Information collected automatically.', text: `The Site does not set cookies and does not use analytics or advertising tools. Like most websites, it does involve some routine technical data:` }],
      list: [
        'Our hosting provider records standard server logs, such as IP address, browser type, the pages requested, and the date and time of each request, to deliver and secure the Site.',
        'The Site loads its fonts from Google Fonts. When you visit, your browser connects to Google\u2019s servers, which receive your IP address and browser information. Google\u2019s use of that information is governed by Google\u2019s Privacy Policy.',
      ],
    },
    {
      h: 'How we use information',
      p: [`We use the information described above to:`],
      list: [
        'respond to your questions and requests;',
        'discuss, propose, and provide our services;',
        'operate, maintain, and protect the Site; and',
        'comply with legal obligations and enforce our rights.',
      ],
    },
    {
      h: 'How we share information',
      p: [
        `We do not sell your personal information, and we do not share it for advertising.`,
        `We may share information with service providers that help us operate our business, such as website hosting and email providers, who are permitted to use it only to provide services to us. When responding to an inquiry about a specific property or market, we may share relevant details with the consultants in NTRG’s network who would work on the matter. We may also disclose information when required by law, to protect our rights or the safety of others, or in connection with a merger, acquisition, or sale of all or part of our business.`,
      ],
    },
    {
      h: 'Third-party websites',
      p: [
        `The Site links to other websites, including the Client Portal, LinkedIn, and Google Maps. Those websites have their own privacy practices, which this Policy does not cover. We encourage you to review their privacy policies.`,
      ],
    },
    {
      h: 'How long we keep information',
      p: [
        `We keep information you send us for as long as needed to respond to you, provide our services, maintain business records, and meet legal and regulatory requirements. Server logs are retained by our hosting provider for a limited period under its own policies.`,
      ],
    },
    {
      h: 'Security',
      p: [
        `We use reasonable administrative, technical, and physical safeguards to protect information. No method of transmission or storage is completely secure, however. Please do not send highly sensitive information, such as Social Security or bank account numbers, by regular email.`,
      ],
    },
    {
      h: 'Your choices',
      p: [
        `You may ask us to access, correct, or delete personal information you have provided to us by contacting us using the details below. Depending on where you live, you may have additional rights under applicable state law, and we will respond to requests as those laws require.`,
      ],
    },
    {
      h: 'Children\u2019s privacy',
      p: [
        `The Site is intended for businesses and is not directed to children. We do not knowingly collect personal information from children under 13. If you believe a child has sent us personal information, please contact us and we will delete it.`,
      ],
    },
    {
      h: 'Changes to this Policy',
      p: [
        `We may update this Privacy Policy from time to time, for example if we add new features to the Site. When we do, we will post the updated version on this page and change the “Last updated” date.`,
      ],
    },
  ],
  contactIntro: 'If you have questions about this Privacy Policy or our privacy practices, please contact us:',
}
