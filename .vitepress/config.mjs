import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "API Docs",
  description: "Manage your .CV domains with the Ola.CV API",
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
      { text: 'Sign in', link: 'https://olacv.test' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    search: {
      provider: 'local',
    },
  }
})
