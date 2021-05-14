<template>
  <div id="app">
    <router-view/>
    <footer class="mt-auto">Groupomania réseau d'entreprise</footer>
  </div>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Montserrat;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer {
  color: #091f43;
  font-size: 1.2rem;
  background-color: #9da5b4;
  padding-top: 1em;
  padding-bottom: 1em;
}

</style>
