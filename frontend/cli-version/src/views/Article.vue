<template>
    <div id="articles" class="container-md">
        <NavApp/>
        <div class="row  mt-3 mb-3 justify-content-md-center">
            <router-link :to="{ name: 'Articles'}" class="text-muted text-start">Précedent</router-link>
            <div class="card mb-3 article">
                <div class="card-body">
                    <div class="d-flex justify-content-between pb-3">
                        <div>Prénom Nom</div>
                        <div><small class="text-muted">{{ article.dateOfModification }}</small></div>
                    </div>
                    <h5 class="card-title rounded-pill">{{article.title}}</h5>
                    <img :src="article.imageUrl" class="card-img-bottom" :alt="article.title" v-if="article.isGif == 1">
                    <p class="card-text rounded-pill" v-if="article.isGif == 2">{{ article.content }}</p>
                    <button class="btn btn-danger" @click="deleteArticle(article.idArticle)" v-if="getCookie('userId') == article.idUser">X</button>
                    <button class="btn commentBtn">Commenter</button>
                </div>
            </div>
        </div>
        <CommentForm/>
    </div>
</template>

<script>
import NavApp from '@/components/Nav-app.vue'
import CommentForm from '@/components/CommentForm.vue'

export default {
    components: {
        NavApp,
        CommentForm
    },
    data() {
        return {
            article: []
        }
    },
    mounted() {
        this.getData()
    },

    methods: {
        getData() {
            this.$http.get('http://localhost:3000/api/articles/' + this.$route.params.idArticle,
            {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }
            ).then((response) => {
                this.article = response.data[0]
            }, (response) => {
                console.log('erreur', response)
            })
        },
        deleteArticle(idArticle) {
            this.$http.delete('http://localhost:3000/api/articles/' + idArticle, {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then(() => {
                this.$router.push({ name: 'Articles'})
            }, (response) => {
                console.log('erreur', response)
            }) 
        },
        getCookie(key) {
            var x = document.cookie.split('; ');
            for (const i of x) {
                let y = i.split('=');
                if(y[0] == key){
                    return y[1]
                }
            }
            return null
        }
    }
}
</script>

<style scoped lang="scss">
    .article {
        background-color:#EFEAE4 ;
        padding-left: 3rem;
        padding-right: 3rem;
        border-radius: 5px;
        border:#EFEAE4;
        box-shadow: #E7E1D8 2px 2px;
        text-align: start;
    }
    .card-title {
        background-color: white;
        padding-left: 15px;
    }
    .card-text {
        padding-left: 15px;
        background-color: white;
    }
    .commentBtn {
        font-weight: 900;
        color: #091f43;
        background-color: white;
        padding-right: 2rem;
        padding-left: 2rem;
        margin-left:2rem;
        border: solid 2px red;
        &:hover {
            background-color: rosybrown;
        }
    }
</style>