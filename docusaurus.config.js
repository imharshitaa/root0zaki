/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'root0zaki',
  tagline: 'My Portfolio',
  favicon: 'img/favicon.ico',

  url: 'https://imharshitaa.github.io',
  baseUrl: '/root0zaki/',

  organizationName: 'imharshitaa',
  projectName: 'root0zaki',

  // Ignore broken links for now
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'), // enable sidebar
        editUrl: 'https://github.com/imharshitaa/root0zaki/edit/main/', 
      },
      blog: false,
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    },
  ],
],


  themeConfig: {
    navbar: {
      title: 'root0zaki',
      logo: { alt: 'root0zaki Logo', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        { href: 'https://github.com/imharshitaa', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'More', items: [{ label: 'GitHub', href: 'https://github.com/imharshitaa' }] },
      ],
    },
  },
};
export default config;

