import "./bootstrap";
import { createApp } from "vue";
import app from "./app.vue";
import vuetify from "./vuetify";

createApp(app).mount("#app");
createApp(app).use(vuetify).mount("#app");
