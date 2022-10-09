import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import mitt from "mitt";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

createApp(App).use(router).use(VueSweetalert2).mount("#app");
;

