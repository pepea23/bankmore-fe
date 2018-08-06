<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="wrapper-content">
          <div class="row">
            <how-to-entry></how-to-entry>
          </div>
        </div>
      </div>
    </div>
  </div>
<div>
    <HowToEntry></HowToEntry>
    <SellFormRegister_corporate></SellFormRegister_corporate>
    <SellFormRegister_person></SellFormRegister_person>
</div>
</template>

<script>
const HowToEntry = () => import('@/components/borrow/HowToEntry')

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

