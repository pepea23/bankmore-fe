<template>
    <div>
        <banner></banner>
        <privilege></privilege>
    </div>
</template>
<script>
const Banner = () => import('@/components/invester/notlogin/Banner')
const Privilege = () => import('@/components/invester/notlogin/Privilege')

export default {
  title: 'invester',
  components: {
    Banner,
    Privilege,
  },
}
</script>

<style>
</style>

