import { defineConfigWithTheme } from "vitepress";
import config from '@hempworks/pilgrim/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: config,
  title: "API Docs",
  description: "Manage your .CV domains with the Ola.CV API",
  base: '/',
  cleanUrls: false,
  srcDir: 'src',
  head: [
    ['link', {rel: 'icon', href: '/favicon.png'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/ola-logo.png',
      dark: '/ola-logo-white.png',
      alt: 'Ola.CV',
    },

    nav: [
      { text: 'Guide', link: '/markdown-examples' },
      { text: 'Sign in', link: 'https://developer.ola.cv' }
    ],

    versions: [
      {
        text: 'v1.x',
        link: 'https://docs.ola.cv/api/v1',
        current: true,
      },
      {
        text: 'v0.x',
        link: 'https://docs.ola.cv/api/v1',
      },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'API Basics', link: '/markdown-examples' },
          { text: 'Authentication', link: '/api-examples' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        placeholder: 'Search Docs...',
        miniSearch: {
        }
      },
    },
  }
})
