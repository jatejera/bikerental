<template>
  <router-link to="/checkout" href="#">
    Checkout <CartIcon /> ${{totalCost}}
  </router-link>
</template>
<script>
  import CartIcon from "./svg/CartIcon";
  export default {
    name: "Total",
    components: {
      CartIcon
    },
    data: function () {
      return {};
    },
    computed: {
      totalCost() {
        return this.$store.getters.getTotalCost
      }
    }
  };
</script>
<style scoped>
</style>
