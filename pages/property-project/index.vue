<template>
<div class="container">
  <div class="row">
    <div class="col-md-4 ">
      <CardSearch />
    </div>
    <div class="col-md-8 ">
      <CardProduct :productlist="product"></CardProduct>
    </div>
  </div>
</div>
</template>

<script>
import Countdown from "vuejs-countdown";
import socketClient from "socket.io-client";
const socket = socketClient.connect("http://localhost:3002");
const CardSearch = () => import("@/components/Cards/CardSearch");
const CardProduct = () => import("@/components/Cards/CardProduct");

import { mapActions, mapGetters } from "vuex";

export default {
  title: "property-project",
  components: {
    CardSearch,
    Countdown,
    CardProduct
  },
  data() {
    return {
      product: [
        {
          id: 1,
          image: "images/blog-img-1.jpg",
          title: "Proporty1",
          description: "Proporty detail 1"
        },
        {
          id: 2,
          image: "images/blog-img-2.jpg",
          title: "Proporty2",
          description: "Proporty detail 2"
        },
        {
          id: 3,
          image: "images/blog-img-3.jpg",
          title: "Proporty3",
          description: "Proporty detail 3"
        },
        {
          id: 4,
          image: "images/blog-img-4.jpg",
          title: "Proporty4",
          description: "Proporty detail 4"
        },
        {
          id: 5,
          image: "images/blog-img-5.jpg",
          title: "Proporty5",
          description: "Proporty detail 5"
        },
        {
          id: 6,
          image: "images/blog-img-1.jpg",
          title: "Proporty6",
          description: "Proporty detail 6"
        },
        {
          id: 7,
          image: "images/blog-img-1.jpg",
          title: "Proporty7",
          description: "Proporty detail 7"
        },
        {
          id: 8,
          image: "images/blog-img-1.jpg",
          title: "Proporty8",
          description: "Proporty detail 8"
        }
      ]
    };
  },
  mounted() {
    console.log("--- Socket ---");
    socket.on("updateConcurrent", totalUser => {
      console.log('Total User : ' + totalUser + '!!!');
      console.log(totalUser);
    });
  },
  methods: {
    ...mapActions({
      fetchProperty: "propertyProject/fetchPropertyList"
    })
  },
  computed: {
    ...mapGetters({
      getPropertyList: "propertyProject/getPropertyList"
    })
  }
};
</script>
