<template>

  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="wrapper-content">
          <div class="row">
            <AuctionItem v-for="item in items" :key="item.id" :title="item.title" :image="item.image" :description="item.description" :link="item.link" buttonText="Show More"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const AuctionItem = () => import('@/components/widget/AuctionItem')

export default {
  title: 'หน้าแรก',
  components: {
    AuctionItem,
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

