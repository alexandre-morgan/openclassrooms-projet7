<template>
    <div id="login">
        <HeaderHome/>
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <div class="border rounded-pill input-login input-login-title text-start">Se connecter</div>              
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <input type="text" class="form-control input-login rounded-pill" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">           
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <input type="text" class="form-control input-login rounded-pill" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="row justify-content-md-center mt-3">
                <div class="col-8">
                    <div class="row align-items-center">
                        <div class="col-sm-4 ">
                            <router-link :to="{ name: 'Signup'}" class="link-secondary">Créer un compte</router-link>
                        </div>
                        <div class="col-sm-4">
                            <button class="btn btn-login rounded-pill text-nowrap">Se connecter</button>
                        </div>
                    </div>
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
#login {
    color: #091f43;
}
.input-login {
    font-size:1rem;
    font-weight: 900;
    border-color:#091f43;
    border-width: 2px;
    margin-top: 1rem;
}
.input-login-title {
    background-color: #9da5b4;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 15px;
    margin-top: 3rem;
}
.btn-login {
  font-weight: 900;
  color: white;
  background-color: #9da5b4;
  padding-right: 2rem;
  padding-left: 2rem;
}
.btn-login:hover {
  background-color: #091f43;
}

</style>