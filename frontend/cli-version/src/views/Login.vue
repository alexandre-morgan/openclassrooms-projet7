<template>
  <div id="login">
    <HeaderHome/>
    <div class="container">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-md-8">
                <label for="email" class="d-none"><b>Email</b></label>
                <input type="text" placeholder="Entrez votre email" id="email" name="email" required>
            </div>
            <div class="col-2"></div>
        </div>
    <div class="row">
        <div class="col-2"></div>
        <div class="col-md-8">
            <label for="psw" class="d-none"><b>Mot de passe</b></label>
            <input type="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required>
        </div>
        <div class="col-2"></div>
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