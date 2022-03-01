<template>
  <Navbar :isLoggedIn="isLoggedIn" />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>

<style>
body {
  background-color: black;
}
</style>
