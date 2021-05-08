<template>
  <div id="home">
    <HeaderHome/>
    <div class="container">
      <div class="row">  
        <div class="col-2">
          
        </div>
        <div class="col-md-4">
          <router-link :to="{ name: 'Login'}" class="btn btn-lg btn-home rounded-pill">Se connecter</router-link>
        </div>
        <div class="col-md-4">
          <router-link :to="{ name: 'Signup'}" class="btn btn-lg btn-home rounded-pill">Créer un compte</router-link>
        </div>
        <div class="col-2">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHome from '@/components/Header-home.vue'

export default {
  name: 'Home',
  components: {
    HeaderHome
  }
}
</script>

<style scoped>
#home {
  line-height: 1.5rem;
}
.btn-home {
  font-size:2rem;
  font-weight: 900;
  color: white;
  background-color: #9da5b4;
  margin-top: 10rem;
  margin-bottom:10rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
.btn-home:hover {
  color: white;
  background-color: #091f43;
}

</style>