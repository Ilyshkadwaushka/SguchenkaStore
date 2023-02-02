import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";  // vue-router
import store from "./store";    // Vuex
import axios from "axios";      // axios


createApp(App).use(router).use(store).mount('#app')
