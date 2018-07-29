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
  },
  /*
  ** Style
  */
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/style.css',
    '@/assets/css/font-awesome.min.css',
    '@/assets/css/fontello.css',
    '@/assets/css/style.css',
    '@/assets/css/owl.carousel.css',
    '@/assets/css/owl.theme.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
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
