<template>
    <div>
        <div class="wrapper-content bg-white mt-1 p-1">
          <div class="col-12 col-md-12">
            <h1>ข้อมูลผู้สนใจลงทุน</h1>
            <div class="d-flex justify-content-center">
              <button class="btn btn-default" @click="showPersonform()">บุคคลธรรมดา</button>
            <button class="btn btn-default" @click="showCorporateform()">นิติบุคคล</button>
          </div>
          <div class="row">
              <div v-show="isPersonClick" class="col-12 col-md-12">
                <form-person></form-person>
              </div>
              <div v-show="isCorporateClick" class="col-12 col-md-12">
                <form-corporate></form-corporate>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
const FormPerson = () =>
  import('@/components/invester/notlogin/singup/FormPerson')
const FormCorporate = () =>
  import('@/components/invester/notlogin/singup/FormCorporate')

export default {
  title: 'invester-singup',
  components: {
    FormPerson,
    FormCorporate,
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

