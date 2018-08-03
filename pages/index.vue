<template>
<div>
<ShowRate></ShowRate>
</div>
</template>

<script>

const ShowRate = () => import('@/components/home/ShowRate')
export default {
  title: 'หน้าแรก',
  data() {
    return {}
  },
  components: { 
   ShowRate,
  }, 
}
</script>

<style>
</style>

