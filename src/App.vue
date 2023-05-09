<template>
  <div>
    <header>
      <div class="app">Test</div>
    </header>
    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
</template>

<script></script>

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
