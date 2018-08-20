<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <how-to-entry></how-to-entry>
        <div class="wrapper-content">
          <div class="row">
            <button class="btn btn-default" v-on:click="isClickButton = true">บุคคลธรรมดา</button>
            <button class="btn btn-default" v-on:click="isClickButton = false">นิติบุคคล</button>
            <div v-show="isClickButton">
              <sell-form-register-person></sell-form-register-person>
            </div>
            <div v-show="!isClickButton">
              <sell-form-register-corporate></sell-form-register-corporate>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const HowToEntry = () => import('@/components/borrow/HowToEntry')
const SellFormRegisterPerson = () =>
  import('@/components/borrow/form/RegisterPersonForm')
const SellFormRegisterCorporate = () =>
  import('@/components/borrow/form/RegisterCorporateForm')
export default {
  title: 'borrow',

  data() {
    return { isClickButton: true }
  },
  components: {
    HowToEntry,
    SellFormRegisterPerson,
    SellFormRegisterCorporate,
  },
}
</script>

<style>
</style>

