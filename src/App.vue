<template>
  <header>
    <div class="app"><MainMenu /></div>
  </header>
  <router-view />

  <footer>
    <div class="app"><FooterView /></div>
  </footer>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import FooterView from "./components/FooterView.vue";
export default {
  components: {
    MainMenu,
    FooterView,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fbe0c3;
}
.app {
  background-color: #fbe0c3;
}
.test {
  width: 100%;
  align-items: stretch;
}
</style>
