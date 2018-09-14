<template>
<div class="container">
  <div class="row">
    <div class="col-md-4 col-12">
      <CardSearch />
    </div>
    <div class="col-md-8 col-12">
      <CardProduct :product="product"></CardProduct>
    </div>
  </div>
</div>
</template>

<script>
;[
  {
    title: 1,
    description: 1,
    biding_end_time: 1,
  },
  {
    title: 2,
    description: 2,
    biding_end_time: 2,
  },
  {
    title: 3,
    description: 3,
    biding_end_time: 3,
  },
  {
    title: 4,
    description: 4,
    biding_end_time: 4,
  },
  {
    title: 5,
    description: 5,
    biding_end_time: 5,
  },
  {
    title: 6,
    description: 6,
    biding_end_time: 6,
  },
  {
    title: 7,
    description: 7,
    biding_end_time: 7,
  },
  {
    title: 8,
    description: 8,
    biding_end_time: 8,
  },
]
import Countdown from 'vuejs-countdown'
const CardSearch = () => import('@/components/Cards/CardSearch')
const CardProduct = () => import('@/components/Cards/CardProduct')

import { mapActions, mapGetters } from 'vuex'

export default {
  title: 'property-project',
  components: {
    CardSearch,
    Countdown,
    CardProduct,
  },
  data() {
    return {
      product: [
        {
          id: 1,
          image: 'images/blog-img-1.jpg',
          title: 'Proporty1',
          description: 'Proporty detail 1',
        },
        {
          id: 2,
          image: 'images/blog-img-2.jpg',
          title: 'Proporty2',
          description: 'Proporty detail 2',
        },
        {
          id: 3,
          image: 'images/blog-img-3.jpg',
          title: 'Proporty3',
          description: 'Proporty detail 3',
        },
        {
          id: 4,
          image: 'images/blog-img-4.jpg',
          title: 'Proporty4',
          description: 'Proporty detail 4',
        },
        {
          id: 5,
          image: 'images/blog-img-5.jpg',
          title: 'Proporty5',
          description: 'Proporty detail 5',
        },
        {
          id: 6,
          image: 'images/blog-img-1.jpg',
          title: 'Proporty6',
          description: 'Proporty detail 6',
        },
        {
          id: 7,
          image: 'images/blog-img-1.jpg',
          title: 'Proporty7',
          description: 'Proporty detail 7',
        },
        {
          id: 8,
          image: 'images/blog-img-1.jpg',
          title: 'Proporty8',
          description: 'Proporty detail 8',
        },
      ],
    }
  },
  methods: {
    ...mapActions({
      fetchProperty: 'propertyProject/fetchPropertyList',
    }),
  },
  computed: {
    ...mapGetters({
      getPropertyList: 'propertyProject/getPropertyList',
    }),
  },
}
</script>
