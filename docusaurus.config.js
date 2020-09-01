module.exports = {
  title: 'DogNote',
  tagline: 'Activity tracker',
  url: 'https://help.dognote.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'dognote',
  projectName: 'dognote-help',
  themeConfig: {
    navbar: {
      title: 'DogNote',
      logo: {
        alt: 'DogNote Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'https://dognote.app',
          activeBasePath: 'download',
          label: 'Download',
          position: 'left',
        },
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Help',
          position: 'left',
        },
        {
          href: 'https://github.com/rrebase/dognote-help',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help',
          items: [
            {
              label: 'Intro',
              to: '/',
            },
            {
              label: 'Privacy Policy',
              to: 'privacy/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Homepage',
              href: 'https://dognote.app',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DogNoteApp',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Download on the App Store',
              href: 'https://dognote.app',
            },
            {
              label: 'Get it on Google Play',
              href: 'https://dognote.app',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DogNote`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/rrebase/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
