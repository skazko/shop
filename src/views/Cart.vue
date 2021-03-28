<template>
  <div class="cart">
    <h1>Корзина</h1>
    <ShopAlert v-if="isCartEmpty" type="warning" message="Корзина пуста!" />
    <CartTable v-else :items="cart" />
    <h3>Итого: {{cartTotal}}</h3>
  </div>
</template>

<script>
import ShopAlert from "../components/ShopAlert";
import { mapGetters } from "vuex";
import CartTable from '../components/CartTable.vue';

export default {
  components: {
    ShopAlert,
    CartTable,
  },
  computed: {
    ...mapGetters(["cart", "cartTotal"]),
    isCartEmpty() {
      return this.cart.length === 0;
    }
  },
};
</script>

<style scoped>
  h3 {
    text-align: right;
    font-size: 32px;
  }
</style>