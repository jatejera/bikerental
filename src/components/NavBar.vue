<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal">
      <router-link class="logo" to="/">SampleApp Bike Rental</router-link>
    </h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link to="/" class="p-2 text-dark">Home</router-link>| <router-link to="/rent-a-bike"
        class="p-2 text-dark">Rent-A-Bike</router-link>
    </nav>
    <Total />
  </div>
</template>
<script>
  import Total from "./Total";
  export default {
    name: "NavBar",
    components: {
      Total
    }
  };
</script>
<style scoped>
  .logo {
    color: unset !important;
  }

  .logo:hover {
    all: unset;
    cursor: pointer;
  }
</style>