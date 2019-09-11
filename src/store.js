import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalCost: 0,
    products: [],
    cart: []
  },
  mutations: {
    updateProducts(val) {
      this.products = val;
    },
    addToList(state, id) {
      console.log(state.cart)
      let product = state.products.filter(e => {
        return e.id == id
      })
      console.log(product)
      state.cart.push(product[0]);
    },
    removeFromList(state, id) {
      let product = state.cart.filter(e => {
        return e.id != id
      })
      console.log(product)
      state.cart = product;
      // this.$store.commit('updateTotalCost');
    },
  },
  actions: {
    async getBikesList() {
      // console.log("the fetch is running");
      this.state.products = await fetch("/bikerentals.json").then(async function (response) {
        let pars = await response.json();
        return await pars.products;
      });
      await console.log(this.state.products);
    },
    complete() {
      console.log('running')
      this.state.totalCost = 0;
      this.state.products = [];
      this.state.cart = [];
    }
  },
  getters: {
    getBikes: (state) => {
      return state.products.filter(e => {
        return e.product_type == "bike";
      })
    },
    getCart: (state) => {
      console.log('getting cart')
      return state.cart
    },
    getAccesories: (state) => {
      return state.products.filter(e => {
        return e.product_type != "bike";
      })
    },
    getTotalCost(state) {
      if (state.cart.length >= 1) {
        return state.cart.reduce((sum, val) => {
          return sum += val.price
        }, 0)
      } else {
        return 0
      }

    }
  }
});
