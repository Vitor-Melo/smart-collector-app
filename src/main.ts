import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { AxiosHttp } from "./http/axios.http";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

Vue.config.productionTip = process.env.VUE_APP_PRODUCTION_TIP;

const options = {
  position: "bottom-center",
};

Vue.use(Toast, options);

AxiosHttp.init();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
