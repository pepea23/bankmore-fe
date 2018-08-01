<template>
  <div class="row">
    <div class="col-xl-2 col-lg-2 col-md-12 col-sm-6 col-6">
      <div class="logo">
        IN: {{$mq}}
        <nuxt-link to="/" exact><img src="images/logo.png" alt="Bankmore+" id="logo-bankmore"><b>Bankmore+</b></nuxt-link>
      </div>
    </div>
    <div class="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
      <div id="navigation" :class="activeSmallScreen">
        <div id="menu-button" :class="mobileMenuButton" @click="toggleMobileMenu()">Menu</div>
        <ul :style="showMobileMenu" :class="statusMobileMenu">
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
  name: 'Main-Menu',
  data() {
    return {
      isMobileMenuToggle: false,
    }
  },
  computed: {
    isMobile() {
      return this.$mq === 'xs' || this.$mq === 'sm'
    },
    activeSmallScreen() {
      return { 'small-screen': this.isMobile }
    },
    mobileMenuButton() {
      return {
        'menu-opened': this.isMobileMenuToggle,
      }
    },
    showMobileMenu() {
      return {
        display: this.isMobile && !this.isMobileMenuToggle ? 'none' : 'block',
      }
    },
    statusMobileMenu() {
      return { open: this.isMobileMenuToggle }
    },
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuToggle = !this.isMobileMenuToggle
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active > a,
.next-link-active > a {
  color: #f51f8a !important;
}

#logo-bankmore {
  height: 50px;
}
</style>
