<template>
  <div>
    <main-header></main-header>
    <nuxt/>
    <main-footer></main-footer>
  </div>
</template>

<script>
const MainHeader = () =>
  import(/* webpackChunkName:'main-header-component' */ '@/components/common/MainHeader')
const MainFooter = () =>
  import(/* webpackChunkName:'main-footer-component' */ '@/components/common/MainFooter')

export default {
  components: {
    MainHeader,
    MainFooter,
  },
}
</script>
