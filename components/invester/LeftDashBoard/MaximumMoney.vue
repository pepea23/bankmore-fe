<template>
<div class="card" style="width: width;">
    <div class="card-body">
        <h5 class="card-title">Revenue 2016</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{this.maximumMoney}}</h6>
               

     
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            maximumMoney: 1000,
            currentMoney: 0,
        };
    }
};
</script>
