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
;[
  {
    title: 1,
    sale: 1,
    rent: 1,
  },
  {
    title: 2,
    sale: 2,
    rent: 2,
  },
  {
    title: 3,
    sale: 3,
    rent: 3,
  },
  {
    title: 4,
    sale: 4,
    rent: 4,
  },
  {
    title: 5,
    sale: 5,
    rent: 5,
  },
  {
    title: 6,
    sale: 6,
    rent: 6,
  },
  {
    title: 7,
    sale: 7,
    rent: 7,
  },
  {
    title: 8,
    sale: 8,
    rent: 8,
  },
]
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
