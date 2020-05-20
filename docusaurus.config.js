/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Deno Land France',
  tagline: 'Communauté FR autour de Deno',
  url: 'https://denoland.fr',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'denoland-fr', // Usually your GitHub org/user name.
  projectName: 'denoland', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'denoland.fr',
      logo: {
        alt: 'denoland.fr',
        src: 'img/logo.png'
      },
      links: [
        { to: 'docs/doc1', label: 'Docs', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/denoland-fr/site',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ba5sE8'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            }
          ]
        }
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
        href: 'https://opensource.facebook.com/'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Denoland FR. Built with love.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
