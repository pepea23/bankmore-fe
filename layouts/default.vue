<template>
  <div>
    <menu-header></menu-header>
    <nuxt/>
  </div>
</template>

<script>
import MenuHeader from '@/components/MenuHeader'

export default {
  components: {
    MenuHeader,
  },
}
</script>
