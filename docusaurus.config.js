// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rachel NoteBook',
  tagline: 'To be better!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Rachel1771.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Rachel1771', // Usually your GitHub org/user name.
  projectName: 'Rachel1771.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 
          'https://github.com/Rachel1771/Rachel1771.github.io',
        },
        // blog: {
        //   remarkPlugins: [math],
        //   rehypePlugins: [katex],
        //   showReadingTime: false,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //   'https://github.com/Rachel1771/Rachel1771.github.io',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Rachel NoteBook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/4.svg',
        },
        //加入栏目在这里
        items: [
          // {
          //   to: "/docs/Math/intro",
          //   activeBasePath: '/docs/Math',
          //   label: "Math",
          //   position: "left",
          // },
          
          {
            to: "/docs/Foundation/intro",
            activeBasePath: '/docs/Foundation',
            label: "Foundation",
            position: "left",
          },
          // {
          //   to: "/docs/English/intro",
          //   activeBasePath: '/docs/Web',
          //   label: "English",
          //   position: "left",
          // },
          {
            to: "/docs/Web/intro",
            activeBasePath: '/docs/Web',
            label: "Web",
            position: "left",
          },
          

          {
            // href: 'https://github.com/facebook/docusaurus',
            href: 'https://github.com/Rachel1771',
            label: 'GitHub',
            position: 'right',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Segmentfault',
                href: 'https://segmentfault.com/',
              },
              {
                label: 'Bytes',
                href: 'https://bytes.com/',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'Powerby',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Docusaurus',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright : `Copyright © ${new Date().getFullYear()} Rachel NoteBook`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
};

module.exports = config;
