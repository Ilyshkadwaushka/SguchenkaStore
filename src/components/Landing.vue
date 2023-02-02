<template>
  <div class="page">
    <!-- <Navbar /> -->
    <div class="content">
      <!--
      <div class="post" v-for="post in allPosts" :key="post.id">
        <h2>{{ post.name }}</h2>
        <p>{{ post.description }}</p>
      </div>
      -->
      <YandexMap v-bind:coords="getLocation"/>
      <p>{{ getLocation }}</p>
     </div>
  </div>

</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "./Navbar.vue";
import YandexMap from "./YandexMap.vue";
export default {
  name: "Landing",
  components: { Navbar, YandexMap },
  computed: mapGetters(["allPosts", "getLocation"]),
  methods: {
    ...mapActions(["fetchPosts", "fetchLocation"]),
  },
  async mounted() {
    //this.fetchPosts();
    this.fetchLocation();
  }
}
</script>

<style scoped>
.page {
  display: flex;
}
.content{
  margin: auto;
  justify-content: center;
  text-align: center;
}
</style>