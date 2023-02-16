<template>
  <header>
    <div class="app"><MainMenu /></div>
  </header>
  <router-view />

  <footer></footer>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
export default {
  components: {
    MainMenu,
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
</style>
