<template>
  <div class="about">
    <div v-if="cart <= 0 && !isComplete">
      <div class="px-3 py-3 pt-md-5 text-center d-flex justify-conten-between flex-column">
        <h3 class="display-5"> Ups!! Your cart is empty </h3>
        <p class="lead">Click below to begin your amazing rental experience with TopView</p>
        <router-link to="/rent-a-bike" class="btn btn-outline-primary align-self-center mb-3">Rent-A-Bike</router-link>
        <small class="text-muted">This App was developed by Julian Tejera using Vue.js. jats.tejera@gmail.com</small>
      </div>
    </div>
    <div v-else>
      <div v-if="isSummary">
        <div class="px-3 py-3 text-center d-flex flex-column">
          <h1 class="display-4">Checkout</h1>
          <p class="lead">Here is your reservation summary</p>
          <small class="text-muted">If everything looks correct, click "Reserve Now" to proceed. or modify
            reservation</small>
        </div>
        <CheckoutBikeSpec v-for="product in cart" :product="product" :key="product.id" />
        <div class="col text-center d-flex flex-column">
          <router-link to="/rent-a-bike" class="btn btn-outline-secondary align-self-center mb-3">Modify Reservation
          </router-link>
          <button @click="reserveNow" class="btn btn-primary align-self-center mb-3">Reserve Now</button>
          <small class="text-muted">All reservations are subject to a cancellation fee if, if cancelled within 24 hours
            prior to the reservation time.</small>
        </div>
      </div>
    </div>
    <div v-if="isComplete">
      <div class="px-3 py-3 pt-md-5 text-center d-flex justify-conten-between flex-column">
        <div>
          <img class="img-fluid" alt="Vue logo" src="../assets/logo.png" />
        </div>
        <h1 class="display-4"> Thank you!</h1>
        <p class="lead"> I hope you liked this small SPA Vue App.</p>
        <p class="lead"> Please feel free to contact me at any time (at the email below) if you have any questions</p>
        <p class="lead"> Julian Tejera. jats.tejera@gmail.com or 917-773-2818</p>
        <a href="/download" target="_blank" class="btn btn-outline-success align-self-center mb-3">DOWNLOAD THIS APP</a>
      </div>
    </div>
  </div>
</template>
<script>
  import CheckoutBikeSpec from "@/components/CheckoutBikeSpec.vue";
  export default {
    name: "Rent-A-Bike",
    components: {
      CheckoutBikeSpec
    },
    data() {
      return {
        isSummary: false,
        isComplete: false,
      };
    },
    async created() {
      this.isSummary = true;
    },
    computed: {
      isAnySelected() {
        return this.$store.state.cart.length >= 1;
      },
      cart() {
        return this.$store.getters.getCart.filter(this.onlyUnique);
      },
    },
    methods: {
      onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      },
      reserveNow() {
        this.isSummary = false;
        this.isComplete = true;
        this.$store.dispatch('complete');
      }
    },
    watch: {}
  };
</script>