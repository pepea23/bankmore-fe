<template>
<div class="container">
  <div class="row">
    <div class="col-md-4 col-12">
      <advance-search></advance-search>
    </div>
    <div class="col-md-8 col-12">
      <product-list :items="items"></product-list>
    </div>
    
    <!-- <button @click="fetchPropertys()">fetch</button> -->
  </div>
</div>
</template>

<script>
const advanceSearch = () =>
  import('@/components/property-for-sale-rent/advanceSearch')
const ProductList = () =>
  import('@/components/property-for-sale-rent/ProductList')

import { mapActions, mapGetters } from 'vuex'

export default {
  title: 'propertyForSaleRent',
  components: {
    advanceSearch,
    ProductList,
  },
  mounted() {
    this.fetchPropertyList()
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image: 'images/card-1.png',
          title: 'Test Product 1',
          sale: '100',
          rent: '100',
        },
        {
          id: 2,
          image: 'images/card-2.png',
          title: 'Test Product 2',
          description: 'test detail 2',
          sale: '200',
          rent: '200',
        },
        {
          id: 3,
          image: 'images/card-3.png',
          title: 'Test Product 3',
          description: 'test detail 3',
          sale: '300',
          rent: '300',
        },
        {
          id: 4,
          image: 'images/card-4.png',
          title: 'Test Product 4',
          description: 'test detail 4',
          sale: '400',
          rent: '400',
        },
        {
          id: 5,
          image: 'images/card-5.png',
          title: 'Test Product 5',
          description: 'test detail 5',
          sale: '500',
          rent: '500',
        },
        {
          id: 6,
          image: 'images/card-6.png',
          title: 'Test Product 6',
          description: 'test detail 6',
          sale: '600',
          rent: '600',
        },
        {
          id: 7,
          image: 'images/card-6.png',
          title: 'Test Product 7',
          description: 'test detail 7',
          sale: '700',
          rent: '700',
        },
        {
          id: 8,
          image: 'images/card-6.png',
          title: 'Test Product 8',
          description: 'test detail 8',
          sale: '800',
          rent: '800',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      getPropertyList: 'property/getPropertyList',
    }),
  },
  methods: {
    ...mapActions({
      fetchPropertyList: 'property/fetchPropertyList',
    }),
  },
}
</script>
