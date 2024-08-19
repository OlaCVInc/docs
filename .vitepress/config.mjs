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
      { text: 'Guide', link: '/index' },
      { text: 'Sign in', link: 'https://developer.ola.cv' }
    ],

    versions: [
      {
        text: 'v1.x',
        link: 'https://docs.ola.cv',
        current: true,
      },
      {
        text: 'v0.x',
        link: 'https://docs.ola.cv',
      },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'API Basics', link: '/index' },
          { text: 'Authentication', link: '/authentication' },
          { text: 'Errors', link: '/errors' }
        ]
      },
      {
        text: 'API Endpoints',
        items: [
          { text: 'Contacts', link: '/api/contacts' },
          { text: 'Domains', link: '/api/domains' },
          { text: 'Zones', link: '/api/zones' },
          { text: 'DNS Records', link: '/api/dns-records' }
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
