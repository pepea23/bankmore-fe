<template>
  <div class="header" v-sticky :z-index="100" :sticky-top="100" style="padding: 0">
    <div class="container">
      <main-menu></main-menu>
    </div>
  </div>
</template>

<script>
const MainMenu = () => import('@/components/common/MainMenu')

export default {
  name: 'Main-Header',
  components: {
    MainMenu,
  },
}
</script>
