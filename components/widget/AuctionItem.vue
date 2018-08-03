<template>
  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
    <div class="service-img-box mb30 text-center">
      <div class="service-img">
        <nuxt-link :to="link" class="imghover"><img :src="image" :alt="title" class="img-fluid"></nuxt-link>
      </div>
      <div class="service-content bg-white pinside30 outline">
        <h2>
          <nuxt-link :to="link" class="title">{{title}}</nuxt-link>
        </h2>
        <p>{{description}}</p>
        <nuxt-link :to="link" class="btn-link">{{buttonText}}</nuxt-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Auction-Item',
  props: {
    title: String,
    description: String,
    image: String,
    link: String,
    buttonText: String,
  },
}
</script>
