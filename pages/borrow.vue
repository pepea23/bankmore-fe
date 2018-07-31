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
</div>
</template>

<script>
export default {
  title: 'borrow',
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
}
</script>

<style>
</style>

