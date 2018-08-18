<template>
  <div>
    <header-product-items></header-product-items>
    <explain-step></explain-step>
    <banner></banner>
    <features></features>
    <privilege></privilege>
    <faq></faq>
  </div>
</template>

<script>
const HeaderProductItems = () =>
  import('@/components/loan-product/HeaderProductItems')
const ExplainStep = () => import('@/components/loan-product/ExplainStep')
const Banner = () => import('@/components/loan-product/Banner')
const Features = () => import('@/components/loan-product/Features')
const Privilege = () => import('@/components/loan-product/Privilege')
const Faq = () => import('@/components/loan-product/FAQ')
export default {
  title: 'loan-product-detail',

  data() {
    return {}
  },
  components: {
    HeaderProductItems,
    ExplainStep,
    Banner,
    Features,
    Privilege,
    Faq,
  },
}
</script>

<style>
</style>