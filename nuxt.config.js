export default {
  target: 'static',
  router: {
    base: '/ite18_project/'
  },
  axios: {
    // Base URL of the API
    baseURL: 'http://localhost:1337',
    // Headers to send with every request
    headers: {
      common: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },

  auth: {
    // Options
    strategies: {
      local: {
        token: {
          property: 'jwt',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: 'http://localhost:1337/api/auth/local',
            method: 'post',
          },
          user: {
            url: 'http://localhost:1337/api/users/me',
            method: 'get',
          },
          logout: false,
        },
      },
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'defu'
    ]
  }
}
