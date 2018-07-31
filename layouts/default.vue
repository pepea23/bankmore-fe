<template>
  <div>
    <main-header></main-header>
    <nuxt/>
  </div>
</template>

<script>
const MainHeader = () =>
  import(/* webpackChunkName:'main-header-components' */ '@/components/MainHeader')

export default {
  components: {
    MainHeader,
  },
}
</script>
