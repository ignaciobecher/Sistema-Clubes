<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
#app {
  font-family: "Roboto", sans-serif;
}
</style>
