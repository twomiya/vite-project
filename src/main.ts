import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import axios from "axios";
import "element-plus/dist/index.css";
import "./index.css";
import router from "./router/index";
import vuex from "./store/index";
axios.defaults.baseURL = "http://localhost:6060/api/";
axios.interceptors.request.use((config) => {
  // store.commit('setLoading', true)
  // store.commit('setError', { status: false, message: '' })
  return config;
});

axios.interceptors.response.use(
  (config) => {
    setTimeout(() => {
      // store.commit('setLoading', false)
    }, 1000);
    return config;
  },
  (e) => {
    const { error } = e.response.data;
    // store.commit('setError', { status: true, message: error })
    // store.commit('setLoading', false)
    return Promise.reject(e.response.data);
  }
);
const app = createApp(App);

app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.use(router);
app.use(vuex);
app.mount("#app");
