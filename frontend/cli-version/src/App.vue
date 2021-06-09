<template>
  <div id="app">
    <router-view/>
    <footer class="mt-auto">Groupomania réseau d'entreprise</footer>
  </div>
</template>


<style lang="scss">
@import "./styles/_variables.scss";

#app {
  font-family: Avenir, Montserrat;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $base-color-1-primary;
}

footer {
  color: $base-color-1-primary;
  font-size: 1.2rem;
  background-color: $base-color-1-secondary;
  padding-top: 1em;
  padding-bottom: 1em;
}
p {
  white-space: pre-line;
  word-wrap: break-word;
  font-family: inherit;
}
.article {
  max-width: 960px;
}
.previous {
  max-width: 960px;
}

</style>
