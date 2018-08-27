<template>
  <div>
    <main-header></main-header>
    <nuxt/>
    <main-footer></main-footer>
  </div>
</template>

<script>
const MainHeader = () => import('@/components/common/MainHeader')
const MainFooter = () => import('@/components/common/MainFooter')

export default {
  components: {
    MainHeader,
    MainFooter,
  },
}
</script>
