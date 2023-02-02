import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Landing,
            /*
            meta: {
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: "animate__animated animate__fadeOutRight",
            }
            */
        }
    ],
});

export default router