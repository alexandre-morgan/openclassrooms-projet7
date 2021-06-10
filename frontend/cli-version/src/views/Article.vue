<template>
    <div id="articles">
        <NavApp/>
        <div class="alert alert-danger" v-if="errorJwt.message !== ''"> {{ this.errorJwt.message }} </div>
        <div class="container-md" v-if="!(errorJwt.message !== '')">
            <div class="row  mt-3 mb-3 justify-content-md-center">
                <div class="text-start previous">
                    <router-link :to="{ name: 'Articles'}" class="text-muted ">Précedent</router-link>
                </div>
                <div class="card mb-3 article">
                    <div class="card-body">
                        <div class="d-flex flex-column flex-md-row justify-content-between pb-3">
                            <div> {{ article.firstname }} {{ article.lastname }} </div>
                            <div><small class="text-muted">{{ setDate(article.dateOfModification) }}</small></div>
                        </div>
                        <h5 class="card-title rounded">{{article.title}}</h5>
                        <img :src="article.imageUrl" class="card-img-bottom" :alt="article.title" v-if="article.isGif == 1">
                        <p class="card-text rounded" v-if="article.isGif == 2">{{ article.content }}</p>
                        <div class="d-flex justify-content-end align-items-center">
                            <button class="btn link-danger text-decoration-underline" @click="deleteArticle(article.idArticle)" v-if="getCookie('userId') == article.userId">Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="comments.length !== 0">
                <h3> {{ comments.length }} Commentaires</h3>
                <div class="row  mt-3 mb-3 justify-content-md-center" v-for="item in comments" :key="item.commentId">
                    <div class="card mb-3 article">
                        <div class="card-body">
                            <div class="d-flex flex-column flex-md-row justify-content-between pb-3">
                                <div> {{ item.firstname}} {{ item.lastname }} </div>
                                <div><small class="text-muted">{{ setDate(item.dateOfModification) }}</small></div>
                            </div>
                            <p class="card-text rounded">{{ item.content }}</p>
                            <div class="d-flex justify-content-end align-items-center">
                                <button class="btn link-danger text-decoration-underline" @click="deleteComment(item.commentId)" v-if="getCookie('userId') == item.userId">Supprimer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn" @click="moreComments()" v-if="this.comments.length >= this.nbOfComments">Voir plus</button>
            </div>
            <CommentForm/>
        </div>
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
            article: {},
            comments: [],
            nbOfComments: 5,
            errorJwt: {
                message: ""
            }
        }
    },
    mounted() {
        this.getData()
        this.getComments()
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
                if(response.body.error.name == "TokenExpiredError") {
                    this.errorJwt.message = "Session expirée. Veuillez vous déconnecter."
                }
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
        getComments() {
            this.$http.get('http://localhost:3000/api/comments/' + this.$route.params.idArticle + `?nbOfComments=${this.nbOfComments}`, {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then((response) => {
                this.comments = response.data 
            }, (response) => {
                console.log('erreur', response)
            }) 

        },
        deleteComment(commentId) {
            this.$http.delete('http://localhost:3000/api/comments/' + commentId, {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then(() => {
                this.getComments()
            }, (response) => {
                console.log('erreur', response)
            }) 
        },
        moreComments() {
            this.nbOfComments += 5;
            this.getComments()
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
        },
        setDate(timeStamp) {
            if(!timeStamp) {
                return ""
            }
          const dateTime = timeStamp.split('T')
          const date = dateTime[0]
          const time = dateTime[1].split('.')[0]
          return `${date} - ${time}`;
        }
    }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

    .article {
        background-color: $article-color ;
        border-radius: 5px;
        border:$article-color;
        box-shadow: $article-shadow-color 2px 2px;
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
        color: $base-color-1-primary;
        background-color: white;
        padding-right: 2rem;
        padding-left: 2rem;
        margin-left:2rem;
        border: solid 2px $base-color-2-primary;
        &:hover {
            background-color: $base-color-2-secondary;
        }
    }
</style>