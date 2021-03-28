<template>
  <ul class="product-list">
    <li class="product-item" v-for="product of list" :key="product.name">
      <ProductCard :product="product" />
    </li>
  </ul>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  justify-content: center;
}
.product-item {
  padding: 15px;
  flex: 0 0 calc(100% - 30px);
}

@media (min-width: 450px) {
  .product-item {
    flex: 0 0 calc(50% - 30px);
  }
}

@media (min-width: 900px) {
  .product-item {
    flex: 0 0 calc(25% - 30px);
  }
}
</style>
