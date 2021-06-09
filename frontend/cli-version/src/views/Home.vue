<template>
  <div id="home">
    <HeaderHome/>
    <div class="container-md ">
      <div class="row mb-3 mt-3 home justify-content-md-center align-items-center">  
        <div class="col-md-6 mb-3">
          <router-link :to="{ name: 'Login'}" class="btn btn-lg btn-home rounded-pill text-nowrap">Se connecter</router-link>
        </div>
        <div class="col-md-6 mb-3">
          <router-link :to="{ name: 'Signup'}" class="btn btn-lg btn-home rounded-pill text-nowrap">Créer un compte</router-link>
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
.home {
  min-height: 300px;
}
.btn-home {
  font-size:2rem;
  font-weight: 900;
  color: white;
  background-color: #9da5b4;
  padding-right: 2rem;
  padding-left: 2rem;
}
.btn-home:hover {
  color: white;
  background-color: #091f43;
}

</style>