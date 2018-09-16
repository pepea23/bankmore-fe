<template>
<div class="row">
  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" v-for="product in product" :key="product">
    <div class="card">
          <img :src="product.image" :alt="title" />
          <div class="card-content">
            <center><h3 class="card-name">{{product.title}}</h3></center>
            <div class="card-features ">
              <ul class="listnone">
                <center><li>{{product.description}}</li></center>
              </ul>
            </div>
            <div class="text-danger fontCountdown d-flex justify-content-center">
              <!-- <Countdown deadline="August 22, 2022"></Countdown> -->
              <Countdown end="14-Sep-2018 23:00:00"></Countdown>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  title: 'property-project',
  components: {
    Countdown,
  },
  props: {
    product: Array,
  },
  methods: {},
}
</script>

<style>
</style>
