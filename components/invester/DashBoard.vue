<template>
<div class="content">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <MaximumMoney/>
            </div>
            <div class="col-sm-6">
                <BidofferCard/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <LoginTimeCard/>
            </div>
            <div class="col-sm-6">
                <BindingProgress/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <SaleThisMonrhCard class="mt-5" />
            </div>
            <div class="col-sm-3">
                <SaleOrderOpen/>
            </div>
            <div class="col-sm-6">
                <IntrestList/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <SaleThisMonth/>
            </div>
            <div class="col-sm-3">
                <ItemSaleShareCard class="ml-2 mt-5" />
            </div>
            <div class="col-sm-6">
                <Quick/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <RoiCard/>
            </div>
            <div class="col-sm-6">
                <SeachLink/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <TableCard/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <ADShop/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SaleOrderOpen from "./LeftDashBoard/SaleOrderOpen"
import SaleThisMonth from "./LeftDashBoard/SaleThisMonth"
import MaximumMoney from "./LeftDashBoard/MaximumMoney"
import SaleThisMonrhCard from "./LeftDashBoard/SaleThisMonrhCard"
import ItemSaleShareCard from "./LeftDashBoard/ItemSaleShareCard"
import RoiCard from "./LeftDashBoard/RoiCard"
import TableCard from "./LeftDashBoard/TableCard"
import LoginTimeCard from "./LeftDashBoard/LoginTimeCard"
import ADShop from "./RightDashBoard/AD-shop"
import BidofferCard from "./RightDashBoard/BidofferCard"
import BindingProgress from "./RightDashBoard/binding-progress"
import IntrestList from "./RightDashBoard/Intrest-list"
import SeachLink from "./RightDashBoard/Seach-link"
import Quick from "./RightDashBoard/Quick"
import {
    METHODS
} from 'http';
export default {
    name: "DashBoard",
    components: {
        Quick,
        SaleThisMonth,
        SaleOrderOpen,
        MaximumMoney,
        SaleThisMonrhCard,
        ItemSaleShareCard,
        RoiCard,
        TableCard,
        LoginTimeCard,
        BidofferCard,
        ADShop,
        BindingProgress,
        IntrestList,
        SeachLink
    },

    data() {
        return {

        };
    },
    method() {

    }
};
</script>
