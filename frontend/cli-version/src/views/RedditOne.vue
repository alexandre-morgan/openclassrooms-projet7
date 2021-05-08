<template>
  <div class="redditOne" id="redditOne-page">
        <h2> {{ this.$route.params.idArticle}} </h2>
        <div class="card-group">
            <div class="card w-50">
                <div class="card-body">
                    <h5 class="card-title"> {{ article.title }} </h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID : {{ article.idArticle }}</h6>
                    <p class="card-text" v-if="article.isGif == 2"> {{ article.content }} </p>
                    <img :src="article.imageUrl" class="card-img-top" :alt="article.title" v-if="article.isGif == 1">
                    <p class="card-text"><small class="text-muted">Updated {{ article.dateOfModification }}</small></p>
                    <button class="btn btn-danger" @click.prevent="deleteArticle(article.idArticle)">X</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default ({
    data() {
        return {
            article: {}
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            this.$http.get('http://localhost:3000/api/articles/' + this.$route.params.idArticle).then((response) => {
                this.article = response.body[0];
            }, (response) => {
                console.log('erreur', response)
            })
        },
        deleteArticle(idArticle) {
            this.$http.delete('http://localhost:3000/api/articles/' + idArticle).then(() => {
                this.$router.push("/reddit")
            }, (response) => {
                console.log('erreur', response)
            }) 
        }
    },
})
</script>