<template>
	<div class="card" style="width: 34rem">
		<div class="card-body">
			<h1>Advance Search</h1>
			<form class="form-inline" action="/property-project" method="post" id="searchProperty">
				<div class="content container">
					<div class="search md ">
          	
            	<div class="row">
            <div class="col-sm-12">
						<input class="form-control" id="keyWord" type="text" placeholder="Search.." size="55">
            </div>

            </div>
            	<div class="row">
            <div class="col-sm-12">
						<input class="form-control" id="location" type="text" placeholder="Search.." size="55">
            </div>

            </div>
              	<div class="row">
            <div class="col-sm-12">
						<input class="form-control" id="propertyType" type="text" placeholder="Search.." size="55">
            </div>

            </div>
             	<div class="row">
            <div class="col-sm-12">
						<input class="form-control" id="propertyStatus" type="text" placeholder="Search.." size="55">
            </div>

            </div>
						<div class="row">
            <div class="col-sm-6">
						<input class="form-control" id="minBid" type="text" placeholder="Search..">
            </div>

            <div class="col-sm-6 ">
						<input class="form-control" id="minBaths" type="text" placeholder="Search..">
            </div>
            
            </div>
          	<div class="row">

            <div class="col-sm-6">
						<input class="form-control" id="minArea" type="text" placeholder="Search..">
            </div>

            <div class="col-sm-6 ">
						<input class="form-control" id="maxArea" type="text" placeholder="Search..">
            </div>


            </div>
            </div>
             	<div class="row">
            <div class="col-sm-12">
                        <input type="number" class="form-control" id="input" min="0" max="1000000000" placeholder="บาท" size="55" >
            </div>
					                            <input type="submit" class="btn btn-primary" value="SEARCH" from="searchProperty" onclisk="getDatatest">
            


						<div id="header-search-result" class="td-aj-search show-search">
						</div>
					</div>
				</div>
			</form>
		</div>

	</div>
	
</template>

<style>
.btn {
  width: 10vw;
}
.form-control {
  min-width: 50px;
}
.form-control {
  min-width: 50px;
}
</style>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

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
