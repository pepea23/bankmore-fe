<template>
<div class="row">
  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="row">
      <card-sale-rent v-for="item in items" :key="item.id" :image="item.image" :title="item.title" :description="item.description" :id="item.id" :sale="item.sale" :rent="item.rent"/>
    </div>
  </div>
</div>
</template>

<script>
const CardSaleRent = () =>
  import('@/components/property-for-sale-rent/CardSale-RentItem')

export default {
  name: 'Product-List',
  props: {
    items: Array,
  },
  components: {
    CardSaleRent,
  },
}
</script>
