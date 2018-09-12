<template>
<div class="row">
    <div v-for="product in product" :key="product">
        <div class="col-xl-4 col-md-4 col-6">
            <div class="card">
                <div class="card-img">
                    <img :src="product.image" :alt="title" />
                </div>
                    <div class="card-content">
                        <h3 class="card-name">
                            {{product.title}}
                        </h3>
                        <div class="card-features ">
                            <ul class="listnone">
                                <li>{{product.description}}</li>
                            </ul>
                        </div>
                        <div class="text-danger fontCountdown d-flex justify-content-center">
                            <Countdown deadline="August 22, 2022"></Countdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Countdown from "vuejs-countdown";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    title: "property-project",
    components: {
        Countdown
    },

    mounted() {
        this.product = this.getProduct;
    },
    data() {
        return {
            product: []
        };
    },
    methods: {},
    computed: {
        ...mapGetters(["getProduct"])
    }
};
</script>

<style>
.paddingAll {
    padding: 5%;
}

.fontCountdown {
    font-size: 5%;
}

.card {
    width: 350px;
}
</style>
