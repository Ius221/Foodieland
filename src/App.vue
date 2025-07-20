<template>
  <the-header />
  <router-view />
  <the-footer />
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  letter-spacing: -2%;
  font-family: "Inter", sans-serif;
}
</style>
