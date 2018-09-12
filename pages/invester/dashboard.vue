<template>
  <div class="container">
     <DashBoard/>
      </div>
</template>

<script>
const DashBoard = () => import('@/components/invester/DashBoard')

export default {
  title: 'invester-dashboard',
  components: {
   DashBoard
  },
  data() {
    return {
      
    }
  },
  methods: {
  
}
}
</script>

<style>
</style>

