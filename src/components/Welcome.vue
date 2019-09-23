<template>
  <div class="px-3 py-3 pt-md-5 text-center d-flex justify-conten-between flex-column">
    <div>
      <img class="img-fluid" alt="Vue logo" src="../assets/logo.png" />
    </div>
    <h1 class="display-4">
      Welcome to
      <br />DemoApp Bike Rental
    </h1>
    <p class="lead">
      We have an amazing collection of bikes for rent. Your satisfaction is very important to us. Click
      below to browse our not-so-large collection of bikes
    </p>
    <router-link
      to="/rent-a-bike"
      class="btn btn-outline-primary align-self-center mb-3"
    >Rent-A-Bike</router-link>
    <small class="text-muted">
      This App was developed by Julian Tejera using Vue.js. jats.tejera@gmail.com. Click
      <a href="/download" target="_blank" rel="noopener noreferrer">HERE</a> to download this app
    </small>
  </div>
</template>
<script>
export default {
  name: "Welcome"
};
</script>