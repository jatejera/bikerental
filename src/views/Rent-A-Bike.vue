<template>
  <div class="about">
    <div v-if="isBike">
      <div class="px-3 py-3 text-center d-flex flex-column">
        <h1 class="display-4">Available Bikes</h1>
        <p class="lead">Choose the Bike that best fits your need</p>
        <p v-if="topMessage" class="lead" v-bind:class="[isErrorMessage?'text-danger':'text-success']"
          v-html="topMessage"></p>
      </div>
      <BikeSpec v-for="product in bikes" :product="product" :key="product.id" />
    </div>
    <div v-if="isAccesories">
      <div class="px-3 py-3 text-center d-flex flex-column">
        <h1 class="display-4">Accesories</h1>
        <p class="lead">Be safe, choose from the accesories and addons below</p>
      </div>
      <BikeSpec v-for="product in accesories" :product="product" :key="product.id" />
    </div>
    <div class="col text-center">
      <p v-if="isAnySelected" class="lead text-success">Click below to continue</p>
      <button v-if="isBike" @click="goToAccesories" class="btn btn-outline-primary align-self-center mb-3">Select
        Accesories</button>
      <router-link v-if="isAccesories" to="/checkout" class="btn btn-outline-primary align-self-center mb-3">Checkout!
      </router-link>
    </div>
  </div>
</template>
<script>
  import BikeSpec from "@/components/BikeSpec.vue";
  export default {
    name: "Rent-A-Bike",
    components: {
      BikeSpec
    },
    data() {
      return {
        isBike: false,
        isAccesories: false,
        isErrorMessage: false,
        topMessage: ""
      };
    },
    async created() {
      this.isBike = true;
      this.$store.dispatch("getBikesList");
    },
    computed: {
      isAnySelected() {
        return this.$store.state.cart.length >= 1;
      },
      bikes() {
        return this.$store.getters.getBikes;
      },
      accesories() {
        return this.$store.getters.getAccesories;
      },
    },
    methods: {
      goToAccesories() {
        if (this.validateSelection()) {
          console.log('going to accesories')
          this.isBike = false;
          this.isAccesories = true;
        } else {
          console.log('Not going to accesories')
        }
      },
      updateProductList() {
        this.validateSelection();
        this.products = this.$store.state.products;
        console.log(this.$store.state.products);
        console.log(this.products);
      },
      validateSelection() {
        let productSelectedMessage = "";
        if (this.isAnySelected) {
          productSelectedMessage =
            "Great! You can add more bikes to your rental reservation, or blick below to choose your accesories";
          this.isErrorMessage = false;
          this.topMessage = productSelectedMessage;
          return true;
        } else {
          productSelectedMessage = "Please select a bike before choosing accesory";
          this.isErrorMessage = true;
          this.topMessage = productSelectedMessage;
          return false;
        }
      }
    },
    watch: {
      isAnySelected: function () {
        this.validateSelection()
      }
    }
  };
</script>