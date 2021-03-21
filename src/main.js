import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ShopService } from "./services/shop-service";

Vue.config.productionTip = false;

window.app = {
  start({ dealers } = {}) {
    let queryParams;
    if (dealers && dealers.length > 0) {
      queryParams = { dealers: dealers.join(",") };
    }

    const shopService = new ShopService(queryParams);
    Vue.prototype.$shopService = shopService;

    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  },
};
