<template>
<div class="card" style="width: width;">
    <div class="card-body">
        <h5 class="card-title">Sale This Month</h5>
        <h1 class="card-subtitle mb-2 text-muted">{{this.maximumMoney}}K</h1>
               

     
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
