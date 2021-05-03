<template>
  <div class="reddit" id="reddit-page">
        This is the "Reddit" page
        <h2>Listes des articles Reddit</h2>
        <div class="card-group">
            <div class="card w-50" v-for="item in articlesR" :key="item.idArticle">
                <!-- @click="redirect(item.id) -->
                <div class="card-body">
                    <h5 class="card-title"> {{ item.title }} </h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID : {{ item.idArticle }}</h6>
                    <p class="card-text"> {{ item.content }} </p>
                    <p class="card-text"><small class="text-muted">Updated {{ item.dateOfCreation}}</small></p>
                    <!-- <router-link :to="{ name: 'RedditOne', params: { idArticle: item.idArticle }}" class="btn btn-info">M</router-link> -->
                    <button class="btn btn-danger" @click.prevent="deleteArticle(item.idArticle)">X</button>
                </div>
            </div>
        </div>
        <h3>Ajouter un article</h3>
        <ArticlesRForm/>
    </div>
</template>

<script>
import ArticlesRForm from '@/components/ArticlesRForm.vue'

export default ({
    data() {
        return {
            articlesR: []
        }
    },
    components: {
        ArticlesRForm
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            this.$http.get('http://localhost:3000/api/articlesR').then((response) => {
                this.articlesR = response.data
            }, (response) => {
                console.log('erreur', response)
            })
        },
        deleteArticle(idArticle) {
            this.$http.delete('http://localhost:3000/api/articlesR/' + idArticle).then(() => {
                this.getData()
            }, (response) => {
                console.log('erreur', response)
            }) 
        }
    },
})
</script>