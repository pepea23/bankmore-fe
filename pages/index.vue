<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="wrapper-content">
          <div class="row">
            <auction-list :items="items"></auction-list>
            <banner></banner>
            <apply-loan></apply-loan>
            <choose-us></choose-us>
            <user-review></user-review>
          </div>
        </div>
      </div>
    </div>
    <apply-loan></apply-loan>
    <choose-us></choose-us>
    <user-review></user-review>
  </div>

</template>

<script>
const AuctionList = () => import('@/components/widget/AuctionList')
const ShowRate = () => import('@/components/home/ShowRate')
const Banner = () => import('@/components/home/Banner')
const ApplyLoan = () => import('@/components/home/ApplyLoan')
const ChooseUs = () => import('@/components/home/ChooseUs')
const UserReview = () => import('@/components/home/UserReview')

export default {
  title: 'หน้าแรก',
  components: {
    AuctionList,
    ShowRate,
    Banner,
    ApplyLoan,
    ChooseUs,
    UserReview,
  },
  data() {
    return {
      items :
          [
            {
              id: 1,
              title: 'Test Auction',
              image: 'images/blog-img.jpg',
              description: 'Test description',
              link: 'auction/1',
            },
            {
              id: 2,
              title: 'Test Auction 2',
              image: 'images/blog-img.jpg',
              description: 'Test description 2',
              link: 'auction/2',
            },
            {
              id: 3,
              title: 'Test Auction 3',
              image: 'images/blog-img.jpg',
              description: 'Test description 3',
              link: 'auction/3',
            },
          ]
    }
  },

}
</script>

<style>
</style>

