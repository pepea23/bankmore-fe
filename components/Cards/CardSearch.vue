<template>
<div class="card card-body pinside30">
    <div class="container">
        <div class="search md">
            <h3>Advance Search</h3>
            <div class="row">
                <div class="col-md-12 col-12">
                    <input  class="form-control"  type="text" v-model="datatoSeach.keyWord" placeholder="keyWord.." size="55">
          </div>
                    <div class="col-md-12 col-12">
                        <input class="form-control"  type="text" v-model="datatoSeach.propertyType" placeholder="keyWord.." size="55">
          </div>
                        <div class="col-md-12 col-12">
                            <input class="form-control" type="text" v-model="datatoSeach.propertyType" placeholder="propertyType.." size="55">
          </div>
                            <div class="col-md-12 col-12">
                                <input class="form-control"  type="text" v-model="datatoSeach.propertyStatus" placeholder="propertyStatus.." size="55">
          </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <input class="form-control"  type="text" v-model="datatoSeach.minBid" placeholder="minBid..">
          </div>
                                    <div class="col-md-6 col-12">
                                        <input class="form-control"  type="text" v-model="datatoSeach.minBaths" placeholder="minBaths..">
          </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-12">
                                            <input class="form-control"  type="text" v-model="datatoSeach.minArea" placeholder="minArea..">
          </div>
                                            <div class="col-md-6 col-12">
                                                <input class="form-control"  type="text" v-model="datatoSeach.maxArea" placeholder="maxArea..">
          </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 col-12">
                                                    <input type="number" class="form-control"  v-model="datatoSeach.monmey" min="0" max="1000000000" placeholder="บาท" size="55">
          </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 col-12">
                                                        <input type="submit" class="btn btn-primary" value="SEARCH"  @click="this.hnadleOnClickSeach">
          </div>
                                                    </div>
                                                </div>
                                            </div>

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
        return {
            datatoSeach: {
                keyWord: "",
                propertyType: "",
                propertyStatus: "",
                minBid: "",
                minBaths: "",
                minArea: "",
                maxArea: "",
                monmey: ""
            }
        };
    },
    methods: {
        async hnadleOnClickSeach() {
            let test = "test";

            await this.$axious.$post("http://206.189.144.210:3333/api/test", test);
        }
    }
};
</script>
