// docusaurus.config.js
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'root0zaki',
  tagline: 'My Portfolio',
  favicon: 'img/favicon.ico',

  url: 'https://imharshitaa.github.io',
  baseUrl: '/root0zaki/',

  organizationName: 'imharshitaa',
  projectName: 'root0zaki',

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
        docs: false, // disable docs
        blog: false, // disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

export default config;
