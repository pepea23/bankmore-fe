<template>
<div class="row ">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  ">

        <nav class="navbar navbar-expand-lg navbar-light bg-light pr-5">
            <a class="navbar-brand" href="#">
                <div class="logo">
                    <nuxt-link to="/" exact><img src="@/static/images/logo.png" alt="Bankmore+" id="logo-bankmore">
                        <b>Bankmore+</b>
                    </nuxt-link>
                </div>
            </a>
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse pr-5 " id="main-navbar">
                <ul class="navbar-nav ml-auto">
                    <nuxt-link tag="li" class="nav-item" to="/" exact>
                        <a class="nav-link">Home</a>
                    </nuxt-link>
                    <nuxt-link tag="li" class="nav-item" to="/loan-product">
                        <a class="nav-link">Loan Product</a>
                    </nuxt-link>
                    <nuxt-link tag="li" class="nav-item" to="/borrow">
                        <a class="nav-link">Borrow</a>
                    </nuxt-link>
                    <nuxt-link tag="li" class="nav-item" to="/invester">
                        <a class="nav-link">Invester</a>
                    </nuxt-link>
                    <nuxt-link tag="li" class="nav-item" to="/property-project">
                        <a class="nav-link">Property / Project</a>
                    </nuxt-link>
                    <nuxt-link tag="li" class="nav-item" to="/property-for-sale-rent">
                        <a class="nav-link">Property for Sale & Rent</a>
                    </nuxt-link>
                    <nuxt-link tag="li" class="nav-item" to="/articles">
                        <a class="nav-link">Articles</a>
                    </nuxt-link>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">   Welcome :   {{this.getUserdetail.name}}</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapMutations
} from "vuex";
export default {
    name: "Main-Menu",
    method() {},
    computed: {
        ...mapGetters({
            getUserdetail: 'property/getUserdetail',
        }),
    }
};
</script>

<style scoped>
.nuxt-link-exact-active>a,
.next-link-active>a {
    color: #f51f8a !important;
}

.nav-link {
    font-family: "Poppins";
    font-weight: 500;
}
</style>
