<template>
  <div class="card">
    <img :src="image" />
    <div class="footer">
      <h3>{{ product.name }}</h3>
      <span class="price">{{ price }}</span>
      <button :disabled="countInCart === 0" @click="decCartItem(product)" class="button">-</button>
      {{countInCart}}
      <button @click="incCartItem(product)" class="button">+</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
      const cartItem = this.cart.find(p => p.name === this.product.name)
      return cartItem ? cartItem.count : 0;
    },
    price() {
      return "$" + this.product.price;
    },
    image() {
      return "https://murmuring-tor-81614.herokuapp.com" + this.product.image;
    },
  },

  methods: {
    ...mapActions(["incCartItem", "decCartItem"]),
  }
};
</script>

<style scoped>
.card {
  text-align: center;
  margin: 0 auto;
  background: white;
  font-family: "Open Sans";
  transition: 0.3s ease-in;
  padding: 10px;
  border-radius: 5px;
  background-color: #eeeeee;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card:hover {
  background-color: #ffffff;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.card img {
  display: block;
  width: 100%;
}
.price {
  font-size: 24px;
  display: block;
  margin-bottom: 12px;
  font-weight: 700;
}
.button {
  text-decoration: none;
  display: inline-block;
  padding: 0 12px;
  background: #cccccc;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: 0.3s ease-in;
  cursor: pointer;
  border: none;
  background: #fc5a5a;
}
.button:disabled {
  opacity: 0.3;
}
.card:hover .button {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.footer {
  margin-top: auto;
  padding-bottom: 10px;
}
</style>
