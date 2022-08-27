import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import mitt from "mitt";
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

createApp(App).use(router).mount("#app");

