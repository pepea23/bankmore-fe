<template>
    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <div class="card-listing">
            <div class="card-img">
                <nuxt-link :to="linkDetail"><img :src="image" :alt="title"></nuxt-link>
            </div>
            <div class="card-content">
                <h3 class="card-name">
                    <nuxt-link :to="linkDetail" class="title">{{title}}</nuxt-link>
                </h3>
                <div class="card-features ">
                    <ul class="listnone">
                        <li>{{description}}</li>
                    </ul>
                </div>
                <nuxt-link :to="link" class="btn btn-default btn-sm">Apply Now</nuxt-link>
                <nuxt-link :to="linkDetail" class="btn-link">Read More</nuxt-link>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Banner-Product-Items',
  props: {
    image: String,
    title: String,
    description: String,
    link: String,
    linkDetail: String,
  },
}
</script>