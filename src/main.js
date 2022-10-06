import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes.js";
const app = createApp(App);
import store from "./store.js";

app.use(router);
app.use(store);
app.mount("#app");
