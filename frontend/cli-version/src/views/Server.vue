<template>
  <div class="server" id="server-page">
        This is the server page
        <h2>Récupération des données</h2>
        <div class="card-group">
            <div class="card w-50" v-for="item in articles" :key="item.idArticle">
                <!-- @click="redirect(item.id) -->
                <div class="card-body">
                    <h5 class="card-title"> {{ item.title }} </h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID : {{ item.idArticle }}</h6>
                    <p class="card-text"> {{ item.content }} </p>
                    <p class="card-text"><small class="text-muted">Updated {{ item.dateOfCreation}}</small></p>
                    <button class="btn btn-danger" @click.prevent="deleteArticle(item.idArticle)">X</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    data() {
        return {
            articles: []
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            this.$http.get('http://localhost:3000/api/articles').then((response) => {
                this.articles = response.data
            }, (response) => {
                console.log('erreur', response)
            })
        },
        deleteArticle(idArticle) {
            this.$http.delete('http://localhost:3000/api/articles/' + idArticle, {
                
            }).then(() => {
                this.getData()
            })
        }
    },
})
</script>