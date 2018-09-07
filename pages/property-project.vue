<template>
  <div class="container">
    <div class="row ">
    <div class="col-12">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
        <CardSearch/>
      </div>
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
        <CardProduct/>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Countdown from 'vuejs-countdown'
  const CardSearch = () => import('@/components/Cards/CardSearch')
  const CardProduct = () =>import('@/components/Cards/CardProduct')

  export default {
    title: 'property-project',
    components: {
      CardSearch,
      Countdown,
      CardProduct
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
          }, {
            id: 7,
            image: 'images/blog-img-1.jpg',
            title: 'Proporty7',
            description: 'Proporty detail 7',
          }, {
            id: 8,
            image: 'images/blog-img-1.jpg',
            title: 'Proporty8',
            description: 'Proporty detail 8',
          },
        ],
      }
    },
    methods: {

    }
  }

</script>