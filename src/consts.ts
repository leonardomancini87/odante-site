// Place any global data in this file.

export const SITE_TITLE = 'ODANTE';
export const SITE_DESCRIPTION = 'Progetto di ricerca Dante nella contemporaneità. Le riscritture teatrali';

export const CV_URL = '';

export const CONTACT = {
  organization: 'ODANTE Research Project',
  addressLines: [
    'University of Turin',
  ],
  emails: [
    'leonardo.mancini@unito.it',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'Email',
    href: 'mailto:info@odante.unito.it',
    icon: 'email',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Astro Scholar',
  designerUrl: 'https://github.com/shravanngoswamii/astro-scholar',
  sourceLabel: 'Source',
  sourceUrl: 'https://github.com/shravanngoswamii/astro-scholar',
};