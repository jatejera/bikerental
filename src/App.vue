<template>
  <div id="app">
    <NavBar />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view class="container" />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "home",
  components: {
    NavBar
  }
};
</script>
<style>
</style>
