<template>
  <div class="home">
    <h2>Список товаров</h2>
    <ShopLoader v-if="loading" />
    <ShopAlert v-else-if="error" type="error" :message="error" />
    <div class="container" v-else>
      <ProductList :list="productList" />
    </div>
  </div>
</template>

<script>
import ShopLoader from "../components/ShopLoader";
import ShopAlert from "../components/ShopAlert";
import ProductList from "../components/ProductList.vue";
export default {
  name: "Home",
  components: {
    ShopLoader,
    ShopAlert,
    ProductList,
  },
  data() {
    return {
      productList: [],
      loading: false,
      error: null,
    };
  },
  async mounted() {
    this.loading = true;
    const goods = await this.$shopService.getAllGoods();
    this.loading = false;
    if (Array.isArray(goods)) {
      this.productList = goods;
    } else {
      this.error = "Не удалось загрузить список товаров";
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  padding: 30px;
  margin: 0 auto;
}
</style>
