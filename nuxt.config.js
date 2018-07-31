const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bankmore+',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Bankmore+&apos;s frontend',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'js/jquery.min.js', body: true, ssr: false },
      { src: 'js/menumaker.min.js', body: true, ssr: false },
    ],
  },
  /*
  ** Import Style
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/static/css/style.css',
    '@/static/css/font-awesome.min.css',
    '@/static/css/fontello.css',
  ],
  /*
  ** Import Plugin
  */
  plugins: [
    { src: '~plugins/bootstrap', ssr: false },
    { src: '~plugins/vue-sticky', ssr: false },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-sticky'],
    analyze: process.env.ANALYZE,
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  /*
  ** Module
  */
  modules: ['@nuxtjs/axios'],
  axios: {},
}
