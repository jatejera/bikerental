<template>
  <!-- <div class="row"> -->
  <div class="card my-3 d-flex justify-content-around flex-sm-row flex-column">
    <div class="col-auto d-flex justify-content-center">
      <img class="img-fluid m-1 align-self-center" width="100" height="100" :src="product.image" alt />
    </div>
    <div class="card-body text-center">
      <h4 class="card-title">{{product.name}}</h4>
      <p class="card-text">Product Type: {{product.product_type}}</p>
    </div>
    <div class="card-body text-center d-flex justify-content-center">
      <p class="card-text align-self-center">${{product.price}} X {{itemCount(product.id)}}</p>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
  export default {
    name: "BikeSpec",
    props: {
      product: Object
    },
    created: () => {
      console.log("Bike Spec was Created");
    },
    methods: {
      selectThisItem() {
        let productID = this.product.id;
        // console.log(this.product.id)
        this.$store.commit('addToList', productID)
      },
      removeThisItem() {
        let productID = this.product.id;
        // console.log(this.product.id)
        this.$store.commit('removeFromList', productID)
      },
      itemCount(productID) {
        //  let productID = this.product.id;
         let cartCount = this.$store.state.cart.filter(e=> e.id == productID);
        //  console.log(cartCount.length)
        return cartCount.length
      }
    }
  };
</script>
<style scoped>
</style>
