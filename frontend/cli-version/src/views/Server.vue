<template>
  <div class="server" id="server-page">
        This is the server page
        <h2>Récupération des données</h2>

        <div class="card" style="width: 18rem;" v-for="user in users" :key="user.title">
            <img :src="user.imageUrl" class="card-img-top" :alt="user.description">
            <div class="card-body">
                <h5 class="card-title"> {{ user.title }} </h5>
                <p class="card-text"> {{ user.description }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    data() {
        return {
            users: []
        }
    },
    mounted() {
        this.$http.get('http://localhost:3000/api/stuff').then((response) => {
            this.users = response.data
        }, (response) => {
            console.log('erreur', response)
        })
    },
    methods: {
        doPost(user) {
            this.$http.post('http://localhost:3000/api/stuff', {
                title: user.title
            }).then((response) => {
                this.users = response.data
            }, (response) => {
                console.log('erreur', response)
            })
        }
    },
})
</script>