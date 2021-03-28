<template>
  <div class="product-card">
    <img :src="image" />
    <div class="footer">
      <h3>{{ product.name }}</h3>
      <span class="product-price">{{ price }}</span>
      <button :disabled="countInCart === 0" @click="decCartItem(product)" class="product-button">-</button>
      {{ countInCart }}
      <button @click="incCartItem(product)" class="product-button">+</button>
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
.product-button {
  text-decoration: none;
  display: inline-block;
  padding: 0 12px;
  background: #cccccc;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: 0.3s ease-in;
  border: none;
  background: #fc5a5a;
}

.product-button:not(:disabled) {
  cursor: pointer;
}
.product-button:disabled {
  opacity: 0.3;
}
.product-card:hover .product-button {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.footer {
  margin-top: auto;
  padding-bottom: 10px;
}
</style>
