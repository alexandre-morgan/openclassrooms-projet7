<template>
  <div class="server" id="server-page">
    <h1>This is the server page</h1>
    <p> {{ users }} </p>
  </div>
</template>

<script>
export default {
    data ()  {
        return {
            users:[]
        }
    },
    mounted () {
        this.$http.get('http://localhost:3000/api/stuff').then((response) => {
            console.log('success', response)
        }), (response) => {
            console.log('erreur', response)
        }
    }
}
</script>