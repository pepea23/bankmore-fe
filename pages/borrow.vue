<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <how-to-entry></how-to-entry>
        <div class="wrapper-content">
          <div class="d-flex justify-content-center mb-2">
              <button class="btn btn-default" @click="showPersonform()">บุคคลธรรมดา</button>
            <button class="btn btn-default" @click="showCorporateform()">นิติบุคคล</button>
          </div>
            <div class="row">
              <div v-show="isPersonClick" class="col-12 col-md-12">
                <sell-form-register-person></sell-form-register-person>
              </div>
              <div v-show="isCorporateClick" class="col-12 col-md-12">
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
  components: {
    HowToEntry,
    SellFormRegisterPerson,
    SellFormRegisterCorporate,
  },
  data() {
    return {
      isPersonClick: false,
      isCorporateClick: false,
    }
  },
  methods: {
    showPersonform() {
      this.isPersonClick = true
      this.isCorporateClick = false
    },
    showCorporateform() {
      this.isPersonClick = false
      this.isCorporateClick = true
    },
  },
}
</script>

<style>
</style>

