<template>
<div>
  <div v-if="users">
    <ul v-for="item in users" :key="item.id">
      <li>{{item.username}}</li>
    </ul>
  </div>
  <div v-else>
    <li>User Not found</li>
  </div>
  <banner></banner>
  <apply-loan></apply-loan>
  <choose-us></choose-us>
  <user-review></user-review>
</div>
</template>

<script>
const Banner = () => import('@/components/home/Banner')
const ApplyLoan = () => import('@/components/home/ApplyLoan')
const ChooseUs = () => import('@/components/home/ChooseUs')
const UserReview = () => import('@/components/home/UserReview')

export default {
  title: 'หน้าแรก',
  async asyncData({ app, params }) {
    let users = null
    try {
      const result = await app.$axios.$get(
        'http://www.mocky.io/v2/5b60395d2f0000630046177b',
      )
      users = result
    } catch (error) {
      console.log('error', error)
    }
    return {
      users,
    }
  },
  data() {
    return {}
  },
  components: {
    Banner,
    ApplyLoan,
    ChooseUs,
    UserReview,
  },
}
</script>

<style>
</style>

