<template>
    <div id="login">
        <HeaderHome/>
        <form class="container">
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <div class="border rounded-pill input-login input-login-title text-start">Créer un compte</div>              
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <input type="text" 
                    class="form-control input-login rounded-pill" 
                    placeholder="Nom" 
                    aria-label="nom" 
                    aria-describedby="basic-addon1" 
                    id="lastname"
                    name="lastname"
                    v-model="user.lastname">           
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <input type="text" 
                    class="form-control input-login rounded-pill" 
                    placeholder="Prénom" 
                    aria-label="firstname" 
                    aria-describedby="basic-addon1" 
                    id="firstname"
                    name="firstname"
                    v-model="user.firstname">           
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <input type="email" 
                    class="form-control input-login rounded-pill" 
                    placeholder="Email" 
                    aria-label="Email" 
                    aria-describedby="basic-addon1" 
                    id="email"
                    name="email"
                    v-model="user.email">           
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <input type="password" 
                    class="form-control input-login rounded-pill" 
                    placeholder="Mot de passe" 
                    aria-label="Password" 
                    aria-describedby="basic-addon1" 
                    id="password"
                    name="password"
                    v-model="user.password">
                </div>
            </div>
            <div class="row justify-content-md-center mt-3">
                <div class="col-8">
                    <div class="row align-items-center">
                        <div class="col-sm-4 ">
                            <router-link :to="{ name: 'Login'}" class="link-secondary">Se connecter</router-link>
                        </div>
                        <div class="col-sm-4">
                            <button class="btn btn-login rounded-pill text-nowrap" @click="signup">Créer un compte</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
        

<script>
// @ is an alias to /src
import HeaderHome from '@/components/Header-home.vue'

export default {
  name: 'Home',
  components: {
    HeaderHome
  },
      data() {
      return {
        user: {
          email: '',
          password: '',
          lastname: '',
          firstname: ''
        }
      }
    },
    methods: {
      signup(e) {
        e.preventDefault();
        console.log(this.user)
        this.$http.post('http://localhost:3000/api/users/signup', this.user).then(() => {
          this.$router.push("/articles")
        }).catch((error) => {
          alert(error.body.error)
        })
      },
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