import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import RentABike from "./views/Rent-A-Bike.vue";
import Checkout from "./views/Checkout.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/rent-a-bike",
            name: "rent-a-bike",
            component: RentABike,
        },
        {
            path: "/checkout",
            name: "checkout",
            component: Checkout,
        },
    ],
});
