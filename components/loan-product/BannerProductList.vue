<template>
  <div class="container">
        <div class="row">
             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="wrapper-content bg-white pinside40">
                    <div class="row">
                      <banner-product-items v-for="item in items" :key="item.id" :image="item.image" :title="item.title" :description="item.description" :link="item.link" :linkDetail="item.linkDetail" />
                    </div>
                </div>
             </div>
          </div>
  </div>
</template>

<script>
const BannerProductItems = () =>
  import('@/components/loan-product/BannerProductItems')

export default {
  name: 'BannerProduct-List',
  props: {
    items: Array,
  },
  components: {
    BannerProductItems,
  },
}
</script>