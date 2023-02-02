import axios from "axios";

export default {
    actions: {
        async fetchPosts(ctx) {
            await axios.get('http://127.0.0.1:8000/items/').then(response => {
                ctx.commit("updatePosts", response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        async fetchLocation(ctx) {
            await navigator.geolocation.getCurrentPosition(
                position => {
                    ctx.commit("updateLocation", position.coords);
                },
                error => {
                    console.log(error.message);
                },
            )
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        updateLocation(state, coords) {
            state.coords.push(coords.latitude, coords.longitude);
        }
    },  // Functions that directly modify store
    state: {
        posts: [],
        coords: [],
    },      // All application data
    getters: {
        allPosts(state) {
            return state.posts
        },
        getLocation(state) {
            return state.coords
        }
    }
}