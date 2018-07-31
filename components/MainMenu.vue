<template>
  <div class="row">
    <div class="col-xl-2 col-lg-2 col-md-12 col-sm-6 col-6">
      <div class="logo">
        <nuxt-link to="/" exact><img src="images/logo.png" alt="Bankmore+"></nuxt-link>
      </div>
    </div>
    <div class="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
      <div id="navigation">
        <ul>
          <nuxt-link tag="li" to="/" exact>
            <a class="animsition-link">Home</a>
          </nuxt-link>
          <nuxt-link tag="li" to="loan-product">
             <a class="animsition-link">Loan Product</a>
          </nuxt-link>
          <nuxt-link tag="li" to="borrow">
             <a class="animsition-link">Borrow</a>
          </nuxt-link>
          <nuxt-link tag="li" to="invester">
             <a class="animsition-link">Invester</a>
          </nuxt-link>
          <nuxt-link tag="li" to="property-project">
             <a class="animsition-link">Property / Project</a>
          </nuxt-link>
          <nuxt-link tag="li" to="property-for-sale-rent">
             <a class="animsition-link">Property for Sale & Rent</a>
          </nuxt-link>
          <nuxt-link tag="li" to="articles">
             <a class="animsition-link">Articles</a>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu-Header',
}
</script>

<style scoped>
.nuxt-link-exact-active > a,
.next-link-active > a {
  color: #f51f8a !important;
}
</style>
