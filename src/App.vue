<template>
  <div class="layout">
    <div class="nav">
      <router-link to="/">Главная</router-link> |
      <router-link to="/cart"
        >Корзина <span v-if="cartCount">({{ cartCount }})</span></router-link
      >
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["cartCount"]),
};
</script>

<style>
.layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
.container {
  max-width: 1200px;
  padding: 30px;
  margin: 0 auto;
}
</style>
