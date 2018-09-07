<template>
<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
  <div class="card-listing">
    <div class="card-img">
      <nuxt-link :to="'property-for-sale-rent/'+id"><center><img :src="image" :alt="title"></center></nuxt-link>
    </div>
    <div class="card-content">
      <h3 class="card-name">
        <nuxt-link :to="'property-for-sale-rent/'+id" class="title"><center>{{title}}</center></nuxt-link>
      </h3>
      <div class="card-features ">
        <ul class="listnone">
          <table class="table">
          <thead>
            <tr>
              <th>ราคาขาย</th>
              <th>ราคาเช่า</th>
            </tr>
            <tr>
              <th>{{sale}} บาท</th>
              <th>{{rent}} บาท</th>
            </tr>
          </thead>
        </table>
        </ul>
      </div>
      <center>
      <nuxt-link :to="'property-for-sale-rent/'+id" class="btn-link">Read More</nuxt-link>
      </center>
    </div>
  </div>
</div>
</template>

<script>
export default {
  title: 'cardSale-Rent',
  props: {
    image: String,
    title: String,
    description: String,
    id: String,
    sale: String,
    rent: String,
  },
}
</script>
