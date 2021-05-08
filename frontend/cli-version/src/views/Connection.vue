<template>
  <div class="connection">
      <h2>This is the connection page</h2>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary" @click="displayLoginMethod">LogIn</button>
        <button type="button" class="btn btn-outline-primary" @click="displaySignupMethod">SignUp</button>
      </div>
      <LoginForm title="Login" v-if="displayLogin"/>
      <SignupForm title="Signup" v-if="displaySignup"/>

  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue'


export default {
  name: 'Login',
  components: {
    LoginForm,
    SignupForm
  },
  data() {
    return {
        displayLogin: false,
        displaySignup:true
    }
  },
  methods: {
    displayLoginMethod() {
      this.displayLogin = true;
      this.displaySignup = false;
    },
    displaySignupMethod() {
      this.displayLogin = false;
      this.displaySignup = true;
    }
  }

}
</script>
