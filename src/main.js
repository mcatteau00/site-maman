import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import App from "@/App.vue";
import Router from "@/router";
import "@/assets/input.css";

const app = createApp(App).use(Router);
const head = createHead();

app.use(head);
app.mount("#app");
