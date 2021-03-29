<template>
  <div class="cart">
    <h1>Корзина</h1>
    <ShopAlert v-if="isCartEmpty" type="warning" message="Корзина пуста!" />
    <CartTable v-else :items="cart" />
    <h3>Итого: {{ cartTotal }}</h3>
    <base-button v-if="!isCartEmpty" size="l" color="danger" @click="clearCart"
      >Очистить корзину</base-button
    >
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ShopAlert from "../components/ShopAlert";
import CartTable from "../components/CartTable";
import { CLEAR_CART } from "../store/mutation-types";

export default {
  components: {
    ShopAlert,
    CartTable,
  },
  computed: {
    ...mapGetters(["cart", "cartTotal"]),
    isCartEmpty() {
      return this.cart.length === 0;
    },
  },

  methods: {
    ...mapMutations([CLEAR_CART]),
    clearCart() {
      this[CLEAR_CART]();
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: right;
  font-size: 32px;
}
</style>
