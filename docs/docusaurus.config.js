// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Semaphore Docs',
  tagline: 'Intuitive Continuous Integration and Delivery',
  favicon: 'img/favicon.ico',

  // extra themes
  themes: [
    // required for search
    ["@easyops-cn/docusaurus-search-local",
    {
      hashed: true,
      language: ["en"]
    }],
  ],

  // Production url of your site here
  url: 'https://docs.semaphoreci.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '/',

  // GitHub org and project. Needed for Github Pages.
  organizationName: 'semaphoreci',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card image
      image: 'img/semaphore-social-card.jpg',

      // FontAwesome imports
      // scripts: [
      //   {
      //     src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
      //     async: true,
      //   },
      // ],

      // load plugins here
      // plugins: [[
      //   ]
      // ],

      navbar: {
        title: 'Semaphore Docs',
        logo: {
          alt: 'Semaphore Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'startSidebar',
            position: 'left',
            label: 'Get Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'coreSidebar',
            position: 'left',
            label: 'Using Semaphore',
          },

          {
            href: 'https://github.com/semaphoreci/docs',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            // label: 'GitHub',
            position: 'right',

          },
          // {
          //   type: 'html',
          //   position: 'right',
          //   value: '<button>Give feedback</button>',
          // },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },

      // This is an optional announcement bar. It goes on the top of the page
      announcementBar: {
        id: `announcementBar-1`,
        content: `⭐️ If you like Semaphore, <b>give it a star</b> on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/semaphoreci">X</a>`,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/category/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/aBqJDR8ADH',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/semaphoreci',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/semaphoreci',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://semaphoreci.com/blog',
              },
              {
                label: 'YouTube',
                to: 'https://www.youtube.com/c/SemaphoreCI',
              },
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/company/rendered-text/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RenderedText. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;