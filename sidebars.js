/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'About',
      items: ['about/intro'], // add more Markdown files here if needed
    },
    {
      type: 'category',
      label: 'Projects',
      items: ['projects/project1'],
    },
    {
      type: 'category',
      label: 'Research',
      items: ['research/research1'],
    },
    {
      type: 'category',
      label: 'Writeups',
      items: ['writeups/writeup1'],
    },
    {
      type: 'category',
      label: 'Pentesting',
      items: ['pentesting/pentest1'],
    },
  ],
};

module.exports = sidebars;

