import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./index.css";
import router from "./router/index";
import vuex from "./store/index";

const app = createApp(App);

app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.use(router);
app.use(vuex);
app.mount("#app");
