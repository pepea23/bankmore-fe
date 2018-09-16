<template>
    <div>
        <banner></banner>
        <privilege></privilege>
    </div>
</template>
<script>
const Banner = () => import('@/components/borrow/notlogin/Banner')
const Privilege = () => import('@/components/borrow/notlogin/Privilege')

export default {
  title: 'borrow',
  components: {
    Banner,
    Privilege,
  },
}
</script>

<style>
</style>

