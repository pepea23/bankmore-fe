<template>
<div>
    <HowToEntry></HowToEntry>
    <SellFormRegister_corporate></SellFormRegister_corporate>
    <SellFormRegister_person></SellFormRegister_person>
</div>
</template>

<script>
const HowToEntry = () => import('@/components/borrow/HowToEntry')
const SellFormRegister_person = () => import('@/components/borrow/SellFormRegister_person')
const SellFormRegister_corporate = () => import('@/components/borrow/SellFormRegister_corporate')
export default {
  title: 'borrow',
  
  data() {
    return {}
  }, 
  components:{
    HowToEntry,
    SellFormRegister_person,
    SellFormRegister_corporate,
  },

}
</script>

<style>
</style>

