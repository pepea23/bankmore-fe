<template>
<div class="container">
  <div class="row">
    <div class="col-md-4 col-12">
      <CardSearch />
    </div>
    <div class="col-md-8 col-12">
      <CardProduct :product="product"></CardProduct>
    </div>
  </div>
</div>
</template>

<script>
import Countdown from "vuejs-countdown";
import { mapActions, mapGetters, mapMutations } from "vuex";
const CardSearch = () => import("@/components/Cards/CardSearch");
const CardProduct = () => import("@/components/Cards/CardProduct");

export default {
  title: "property-project",
  components: {
    CardSearch,
    Countdown,
    CardProduct
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
