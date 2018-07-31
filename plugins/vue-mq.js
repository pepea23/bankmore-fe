import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 1200,
    lg: Infinity,
  },
})
