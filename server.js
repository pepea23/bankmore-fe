const { Nuxt, Builder } = require('nuxt')

const app = require('express')()
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

// We instantiate nuxt.js with the options
const config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

// Proxy API
const proxy = require('http-proxy-middleware')

app.use(
  '/api',
  proxy({ target: 'http://206.189.144.210:3333', changeOrigin: true }),
)

// Render every route with Nuxt.js
app.use(nuxt.render)

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt)
    .build()
    .then(listen)
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
} else {
  listen()
}

function listen() {
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}
