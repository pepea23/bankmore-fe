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
                <th colspan="3" scope="col">
                  <h2 style="color:#fff">ชื่อรายการ : {{title}}</h2>
                </th>
              </tr>
              <tr>
                <th>เวลาคงเหลือ :
                  <Countdown deadline="October 22, 2018" />
                </th>
                <th>
                  <p style="font-size:25px;">{{getProperty.expected_interest}}</p>
                </th>
                <th>
                  <p style="font-size:25px;">{{getProperty.expected_borrow_time}}</p>
                </th>
              </tr>
              <tr>
                <th>
                  <div class="text-danger fontCountdown d-flex justify-content-center">
                    <Countdown deadline="August 22, 2022"></Countdown>
                  </div>
                </th>
                <th>บาท</th>
                <th>บาท</th>
              </tr>
              <tr>
                <th colspan="3" scope="col">
                  <form method="post" action="">
                    <center><label>จำนวน (ราคาที่ต้องการประมูล)</label>
                      <div class="col-6 col-md-6"><input type="number" name="" min="0" class="form-control" placeholder="บาท"></div>
                    </center>
                    <button type="submit" class="btn btn-default font-size-2" @click="handleBidBtn()">ประมูล</button>
                  </form>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="row">

        </div>
        <div class="row">
          <div class="col-12 col-md-12">
            <h3>รายละเอียด</h3>
            <p style="font-size:17px;">
              {{getProperty.description}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ชื่อผู้ใช้</th>
                  <th scope="col">ราคา</th>
                  <th scope="col">เวลา</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{getProperty.name}}</td>
                  <td>{{getProperty.price}}</td>
                  <td>{{getProperty.time}}</td>
                </tr>
                <tr>
                  <td>{{getProperty.name}}</td>
                  <td>{{getProperty.price}}</td>
                  <td>{{getProperty.time}}</td>
                </tr>
                <tr>
                  <td>{{getProperty.name}}</td>
                  <td>{{getProperty.price}}</td>
                  <td>{{getProperty.time}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</template>

<script>
import Countdown from 'vuejs-countdown'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Countdown,
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
    handleBidBtn() {
      console.log('Hit it!!')
    },
  },
  computed: {
    ...mapGetters({
      getProperty: 'propertyProject/getProperty',
    }),
  },
}
</script>
