<template>
  <div class="container">
    <div class="row ">
    <div class="col-12">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
        <CardSearch/>
      </div>
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
        <CardProduct/>
      </div>
      </div>
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