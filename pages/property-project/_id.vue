<template>
<div class="container">
  <div class="row">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="@/static/images/slider-2.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/static/images/slider-2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/static/images/slider-2.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    </div>
  </div>
  <div class="row">
    <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th>เวลาคงเหลือ :<Countdown deadline="October 22, 2018"/> </th>
            </tr>
            <tr>
              <div class="text-danger fontCountdown d-flex justify-content-center">
              <!-- <Countdown deadline="August 22, 2022"></Countdown> -->
            </div>
              <!-- <th>{{getProperty.expected_interest}} บาท</th>
              <th>{{getProperty.expected_borrow_time}} บาท</th> -->
            </tr>
          </thead>
        </table>
  </div>
  <div class="row">
    <div class="col-12 col-md-12">
      Detail Detail Detail
    </div>

    <div class="col-12 col-md-5">
    <button type="button" class="btn btn-primary font-size-2 container-fluid" @click="handleBidBtn()">Bid!</button>
    </div>
    
  </div>

</div>
</template>

<script>
{
  img: 1 - 6
  biding_end_time: 1
}

import Countdown from 'vuejs-countdown'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
        Countdown
    },
  title: 'propertyId',
  asyncData({ params }) {
    return {
      id: params.id,
    }
  },
  mounted() {
    this.fetchPropertysById(this.id)
  },
  methods: {
    ...mapActions({
      fetchPropertysById: 'propertyProject/fetchPropertysById',
    }),
    handleBidBtn(){
    console.log("Hit it!!")
    }
  },
  computed: {
    ...mapGetters({
      getProperty: 'propertyProject/getProperty',
    }),
  },
}
</script>
