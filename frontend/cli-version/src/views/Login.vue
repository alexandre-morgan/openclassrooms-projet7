<template>
  <div class="login">
      <h2>This is the login page</h2>
      <LoginForm title="Authentification"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>
