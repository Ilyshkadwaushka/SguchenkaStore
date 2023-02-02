<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: initial;
}

/*
.page {
  position: absolute;
  top: 30px;
}
*/


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease-out;
}
</style>
