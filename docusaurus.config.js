// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const math = require('remark-math');
const katex = require('rehype-katex');
const rehypeKatex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  titleDelimiter: '-',
  title: 'Rachel NoteBook',
  tagline: 'To be better!',
  favicon: 'static/img/favicon.ico',
  trailingSlash: false,
  markdown:{
    format: "detect"
  },

  // redefine webpack
  customFields: {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.resolve.extensions.push('.ttf');
        webpackConfig.module.rules.push({
          test: /\.ttf$/,
          use: ['file-loader'],
          include: path.resolve(__dirname, 'static/fonts'),
        });
        return webpackConfig;
      },
    },
  },

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
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      /** @type {import rehypeSlug from 'rehype-slug'} */
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
        blog: {
          showReadingTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/Rachel1771/Rachel1771.github.io',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/header.css'),
            require.resolve('./src/css/fonts.css'),
          ]
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
      image: 'static/img/docusaurus-social-card.jpg',
      // 调整sidebar为可收回
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      sidebar: {
        // 配置每个栏目对应的侧边栏
        '/docs/Foundation/': ['foundationSidebar'],
        '/docs/Math/': ['mathSidebar'],
        '/docs/Web/': ['webSidebar'],
        '/docs/Work/': ['workSidebar'],
      },
      colorMode: { 
        defaultMode: 'light',
        disableSwitch: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: 'Rachel NoteBook',
        logo: {
          alt: 'My Site Logo',
          src: 'static/img/4.svg',
        },
        // 2024-12-29修改布局
        items: [
          {
            to: "/docs/Foundation/intro",
            // activeBasePath: '/docs/Foundation',
            label: "学科基础",
            // position: "left",
          },
          {
            to: "/docs/Web/intro",
            // activeBasePath: '/docs/Web',
            label: "Web开发",
            // position: "left",
          },

          {
            to: "/docs/Math/intro",
            // activeBasePath: '/docs/Math',
            label: "数学基础",
            // position: "left",
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
};
module.exports = config;
