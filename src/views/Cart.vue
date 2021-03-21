<template>
  <div class="about">
    <h1>Корзина</h1>
     <ShopAlert type="info" message="Не успел" />
  </div>
</template>

<script>
import ShopAlert from "../components/ShopAlert";

export default {
  components: {
    ShopAlert
  }
}
</script>