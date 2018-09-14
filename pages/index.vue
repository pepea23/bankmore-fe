<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="wrapper-content">
          <div class="row">
            <banner></banner>
            <auction-list :items="items"></auction-list>
            <apply-loan></apply-loan>
            <choose-us></choose-us>
            <user-review></user-review>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
;[
  {
    title: 1,
    image: 1,
    description: 1,
    link: 1,
  },
  {
    title: 2,
    image: 2,
    description: 2,
    link: 2,
  },
  {
    title: 3,
    image: 3,
    description: 3,
    link: 3,
  },
]

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
      items: [
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
      ],
    }
  },
}
</script>

<style>
</style>

