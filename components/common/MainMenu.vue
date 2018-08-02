<template>
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <div class="logo">
            <nuxt-link to="/" exact><img src="images/logo.png" alt="Bankmore+" id="logo-bankmore">
              <b>Bankmore+</b>
            </nuxt-link>
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-navbar">
          <ul class="navbar-nav ml-auto">
            <nuxt-link tag="li" class="nav-item" to="/" exact>
              <a class="nav-link">Home</a>
            </nuxt-link>
            <nuxt-link tag="li" class="nav-item" to="loan-product">
              <a class="nav-link">Loan Product</a>
            </nuxt-link>
            <nuxt-link tag="li" class="nav-item" to="borrow">
              <a class="nav-link">Borrow</a>
            </nuxt-link>
            <nuxt-link tag="li" class="nav-item" to="invester">
              <a class="nav-link">Invester</a>
            </nuxt-link>
            <nuxt-link tag="li" class="nav-item" to="property-project">
              <a class="nav-link">Property / Project</a>
            </nuxt-link>
            <nuxt-link tag="li" class="nav-item" to="property-for-sale-rent">
              <a class="nav-link">Property for Sale & Rent</a>
            </nuxt-link>
            <nuxt-link tag="li" class="nav-item" to="articles">
              <a class="nav-link">Articles</a>
            </nuxt-link>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main-Menu',
}
</script>

<style scoped>
#logo-bankmore {
  height: 50px;
}

.nuxt-link-exact-active > a,
.next-link-active > a {
  color: #f51f8a !important;
}

.bg-light {
  background: #fff !important;
}

.nav-link {
  font-family: 'Poppins';
  font-weight: 500;
}
</style>
