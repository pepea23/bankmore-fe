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
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js',
        body: true,
        ssr: false,
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        body: true,
        ssr: false,
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
        body: true,
        ssr: false,
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js',
        body: true,
        ssr: false,
      },
      { src: 'js/menumaker.min.js', body: true, ssr: false },
    ],
  },
  /*
  ** Import Style
  */
  css: [
    '@/static/css/bootstrap.min.css',
    '@/static/css/style.css',
    '@/static/css/font-awesome.min.css',
    '@/static/css/fontello.css',
  ],
  /*
  ** Import Plugin
  */
  plugins: [{ src: '~plugins/vue-sticky', ssr: false }],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    vendor: ['vue-sticky'],
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
