<template>
<div class="card">
  <h2 class="pt-1 pl-1" >SaleOrderOpen</h2>

  <div class="card">
  <h5 class="pt-2 pl-1">By xxxx</h5>
    <chartjs-pie v-bind:labels="labels"
      v-bind:datasets="datasets"
      v-bind:option="option"
      v-bind:bind="true"/>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      labels: ["John", "Peter"],
      datasets: [
        {
          data: [ 20, 40],
          backgroundColor: ["#b388ff", "#82b1ff", "#80d8ff"],
          hoverBackgroundColor: ["#673ab7", "#2196f3", "#03a9f4"]
        }
      ],
      option: {}
    };
  }
};
</script>