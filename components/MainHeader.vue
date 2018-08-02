<template>
  <div class="header" v-sticky :z-index="100" :sticky-top="100">
    <div class="container">
      <main-menu></main-menu>
      <choose-us></choose-us>
      <apply-loan></apply-loan>
      <user-review></user-review>
	  <banner></banner>
    </div>
  </div>
</template>

<script>
const MainMenu = () => import('@/components/MainMenu')
const ChooseUs = () => import('@/components/home/ChooseUs')
const ApplyLoan = () => import('@/components/home/ApplyLoan')
const UserReview = () => import('@/components/home/UserReview')
const Banner = () => import('@/components/home/Banner')

export default {
  name: 'Main-Header',
  components: {
    MainMenu,
    ChooseUs,
    ApplyLoan,
    UserReview,
	Banner
  },
}
</script>
