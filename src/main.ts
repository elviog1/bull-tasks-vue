import "./index.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "primeicons/primeicons.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import PrimeVue from "primevue/config";
//import "sweetalert2/src/sweetalert2.scss";
const app = createApp(App);
app.use(PrimeVue);
app.use(createPinia());
app.use(router);

app.mount("#app");
