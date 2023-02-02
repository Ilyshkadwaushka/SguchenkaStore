import { createStore } from "vuex";
import post from "./modules/post";

// New store instance
const store = createStore({
    modules: {
        post,
    }
})

export default store