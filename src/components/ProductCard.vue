<template>
  <div class="product-card">
    <img :src="image" />
    <div class="footer">
      <h3>{{ product.name }}</h3>
      <span class="product-price">{{ price }}</span>
      <base-button
        size="l"
        :disabled="countInCart === 0"
        @click="decCartItem(product)"
        >-</base-button
      >
      {{ countInCart }}
      <base-button size="l" @click="incCartItem(product)">+</base-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
const IMG_URL = "https://murmuring-tor-81614.herokuapp.com";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["cart"]),
    countInCart() {
      const cartItem = this.cart.find((p) => p.name === this.product.name);
      return cartItem ? cartItem.count : 0;
    },
    price() {
      return "$" + this.product.price;
    },
    image() {
      return IMG_URL + this.product.image;
    },
  },

  methods: {
    ...mapActions(["incCartItem", "decCartItem"]),
  },
};
</script>

<style scoped>
.product-card {
  text-align: center;
  margin: 0 auto;
  background: white;
  font-family: "Open Sans";
  transition: 0.3s ease-in;
  padding: 10px;
  border-radius: 5px;
  background-color: #eeeeee;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
}
.product-card:hover {
  background-color: #ffffff;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.product-card img {
  display: block;
  width: 100%;
}
.product-price {
  font-size: 24px;
  display: block;
  margin-bottom: 12px;
  font-weight: 700;
}

.footer {
  margin-top: auto;
  padding-bottom: 10px;
}
</style>
