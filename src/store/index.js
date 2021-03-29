import Vue from "vue";
import Vuex from "vuex";
import { getLSdata, setLSdata } from "../utils/localStorage";
import {
  UPDATE_CART_ITEM,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  CLEAR_CART,
} from "./mutation-types";

Vue.use(Vuex);

const initState = () => ({
  cart: getLSdata("cart") || [],
});

export default new Vuex.Store({
  state: initState,
  getters: {
    cartCount: (state) =>
      state.cart.reduce((count, product) => count + product.count, 0),
    cartTotal: (state) =>
      "$" +
      state.cart
        .reduce((sum, product) => sum + product.count * product.price, 0)
        .toFixed(2),
    cart: (state) => state.cart,
  },
  mutations: {
    [UPDATE_CART_ITEM]: (state, { product, count }) => {
      const productFromCart = state.cart.find((p) => p.name === product.name);
      productFromCart.count = count;
      setLSdata("cart", state.cart);
    },
    [ADD_TO_CART]: (state, product) => {
      state.cart.push({ ...product, count: 1 });
      setLSdata("cart", state.cart);
    },
    [REMOVE_FROM_CART]: (state, product) => {
      state.cart = state.cart.filter((p) => p.name !== product.name);
      setLSdata("cart", state.cart);
    },
    [CLEAR_CART]: (state) => {
      state.cart = [];
      setLSdata("cart", state.cart);
    },
  },
  actions: {
    incCartItem({ commit, state }, product) {
      const productFromCart = state.cart.find((p) => p.name === product.name);
      if (productFromCart) {
        commit(UPDATE_CART_ITEM, { product, count: productFromCart.count + 1 });
      } else {
        commit(ADD_TO_CART, product);
      }
    },
    decCartItem({ commit, state }, product) {
      const productFromCart = state.cart.find((p) => p.name === product.name);
      if (productFromCart) {
        if (productFromCart.count > 1) {
          commit(UPDATE_CART_ITEM, {
            product,
            count: productFromCart.count - 1,
          });
        } else {
          commit(REMOVE_FROM_CART, product);
        }
      }
    },
    setCartItemCount({ commit, state }, { product, count }) {
      const productFromCart = state.cart.find((p) => p.name === product.name);
      if (productFromCart) {
        if (count === 0) {
          commit(REMOVE_FROM_CART, product);
        } else {
          commit(UPDATE_CART_ITEM, { product, count });
        }
      } else {
        if (count > 0) {
          commit(ADD_TO_CART, product);
          commit(UPDATE_CART_ITEM, { product, count });
        }
      }
    },
  },
});
