<template>
  <div >
     <AuctionItem v-for="item in items" :key="item.id" :title="item.title" :image="item.image" :description="item.description" :link="item.link" buttonText="Show More" />
  </div>
</template>

<script>
const AuctionItem = () => import('@/components/widget/AuctionItem')

export default {
  name: 'Auction-List',
  props: {
    items: Array
  },
  components: {
    AuctionItem
  }
}
</script>
