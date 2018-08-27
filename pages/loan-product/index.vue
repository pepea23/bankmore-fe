<template>
  <div>
    <header-product-items></header-product-items>
    <banner-product-list :items="items"></banner-product-list>
  </div>
</template>

<script>
const HeaderProductItems = () =>
  import('@/components/loan-product/HeaderProductItems')
const BannerProductList = () =>
  import('@/components/loan-product/BannerProductList')

export default {
  title: 'loan-product',

  data() {
    return {
      items: [
        {
          id: 1,
          image: 'images/card-1.png',
          title: 'Test Loan Product 1',
          description: 'test detail 1',
        },
        {
          id: 2,
          image: 'images/card-2.png',
          title: 'Test Loan Product 2',
          description: 'test detail 2',
        },
        {
          id: 3,
          image: 'images/card-3.png',
          title: 'Test Loan Product 3',
          description: 'test detail 3',
        },
        {
          id: 4,
          image: 'images/card-4.png',
          title: 'Test Loan Product 4',
          description: 'test detail 4',
        },
        {
          id: 5,
          image: 'images/card-5.png',
          title: 'Test Loan Product 5',
          description: 'test detail 5',
        },
        {
          id: 6,
          image: 'images/card-6.png',
          title: 'Test Loan Product 6',
          description: 'test detail 6',
        },
      ],
    }
  },
  components: {
    HeaderProductItems,
    BannerProductList,
  },
}
</script>

<style>
</style>