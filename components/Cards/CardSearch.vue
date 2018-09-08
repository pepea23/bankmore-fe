<template>
<div class="card card-body pinside30">
  <form>
    <div class="container">
      <div class="search md">
        <h3>Advance Search</h3>
        <div class="row">
          <div class="col-md-12 col-12">
            <input class="form-control" id="keyWord" type="text" placeholder="Search.." size="55">
          </div>
          <div class="col-md-12 col-12">
            <input class="form-control" id="location" type="text" placeholder="Search.." size="55">
          </div>
          <div class="col-md-12 col-12">
            <input class="form-control" id="propertyType" type="text" placeholder="Search.." size="55">
          </div>
          <div class="col-md-12 col-12">
            <input class="form-control" id="propertyStatus" type="text" placeholder="Search.." size="55">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12">
            <input class="form-control" id="minBid" type="text" placeholder="Search..">
          </div>
          <div class="col-md-6 col-12">
            <input class="form-control" id="minBaths" type="text" placeholder="Search..">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12">
            <input class="form-control" id="minArea" type="text" placeholder="Search..">
          </div>
          <div class="col-md-6 col-12">
            <input class="form-control" id="maxArea" type="text" placeholder="Search..">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-12">
            <input type="number" class="form-control" id="input" min="0" max="1000000000" placeholder="บาท" size="55">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-12">
            <input type="submit" class="btn btn-primary" value="SEARCH" from="searchProperty" onclisk="getDatatest">
          </div>
        </div>
      </div>
    </div>

  </form>
</div>
</template>

<style>
/* .btn {
  width: 10vw;
}
.form-control {
  min-width: 50px;
}
.form-control {
  min-width: 50px;
} */
</style>

<script>
import {
  mapActions,
  mapGetters,
  mapMutations
} from "vuex";

export default {
  title: "property-project",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations({})
  },
  computed: {
    ...mapGetters(["getDatatest"])
  }
};
</script>
