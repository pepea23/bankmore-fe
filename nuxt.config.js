module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'bankmore-fe',
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
      { src: '@/assets/js/bootstrap.min.js' },
      { src: '@/assets/js/menumaker.min.js' },
      { src: '@/assets/js/sticky-header.js' },
      { src: '@/assets/js/owl.carousel.min.js' },
      { src: '@/assets/js/slider-carousel.js' },
      { src: '@/assets/js/back-to-top.js' },
    ],
  },
  /*
  ** Style
  */
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/style.css',
    '@/assets/css/font-awesome.min.css',
    '@/assets/css/fontello.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery'],
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
}
