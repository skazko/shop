<template>
  <ul class="cart-table">
    <CartItem v-for="item of items" :key="item.name" :item="item" />
  </ul>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  components: { CartItem },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.cart-table {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
