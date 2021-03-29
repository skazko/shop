<template>
  <li class="cart-item">
    <div class="product-image">
      <img :src="image" />
    </div>
    <div class="product-title">
      {{ item.name }}
    </div>
    <div class="product-count">
      <div>
        <input @blur="onBlur" type="text" v-model="count" />
        <span><span>x</span>{{ price }}</span>
      </div>
    </div>
    <div class="product-total">
      <span>{{ total }}</span>
    </div>
    <div class="product-action">
      <base-button @click="onDelete" size="s" color="danger"
        >&times;</base-button
      >
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
const IMG_URL = "https://murmuring-tor-81614.herokuapp.com";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      count: this.item.count,
    };
  },

  computed: {
    price() {
      return "$" + this.item.price;
    },
    image() {
      return IMG_URL + this.item.image;
    },
    total() {
      return "$" + (this.item.price * this.item.count).toFixed(2);
    },
  },
  methods: {
    ...mapActions(["setCartItemCount"]),
    onBlur() {
      this.count = this.item.count;
    },
    onDelete() {
      this.setCartItemCount({ product: this.item, count: 0 });
    },
  },
  watch: {
    count(current) {
      const count = +current;
      if (Number.isNaN(count) || !Number.isInteger(count)) {
        this.count = this.item.count;
        return;
      }

      if (current === "") {
        return;
      }

      this.setCartItemCount({ product: this.item, count });
    },
  },
};
</script>

<style scoped>
.cart-item {
  position: relative;
  margin-bottom: 20px;
  transition: transform 0.8s;
}

.product-image {
  padding: 5px;
  background-color: #eeeeee;
  margin-bottom: 10px;
}

.product-image img {
  max-width: 80px;
}

.product-title {
  margin-bottom: 5px;
  text-align: left;
  flex-grow: 1;
}

.product-count {
  text-align: right;
  margin-bottom: 5px;
}

.product-count div {
  display: inline-block;
  border-bottom: 1px solid #cccccc;
  padding: 0 0 3px 3px;
}

.product-count input {
  width: 50px;
  border: 1px solid #cccccc;
  font-size: 16px;
  text-align: center;
  margin-right: 5px;
}

.product-count span span {
  margin-right: 5px;
}

.product-total {
  text-align: right;
}

.product-action {
  position: absolute;
  top: 0;
  right: 0;
  padding: 3px;
}

@media (min-width: 600px) {
  .cart-item {
    display: flex;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 10px;
  }

  .product-image {
    margin: 0 10px 0 0;
  }

  .product-count div {
    border: none;
  }

  .product-count {
    align-self: flex-end;
    margin: 0 20px 0 0;
  }

  .product-total {
    align-self: flex-end;
    font-size: 24px;
    flex-basis: 120px;
  }
}
</style>
