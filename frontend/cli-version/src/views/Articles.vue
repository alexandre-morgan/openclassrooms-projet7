<template>
    <div id="articles">
        <NavApp/>
        <div class="alert alert-danger" v-if="errorJwt.message !== ''"> {{ this.errorJwt.message }} </div>
        <div class="container-md">
            <ArticleForm v-if="!(errorJwt.message !== '')"/>
            <div class="row  mt-3 mb-3 justify-content-md-center" v-for="item in articles" :key="item.idArticle">
                <div class="card mb-3 article">
                    <div class="card-body">
                        <div class="d-flex justify-content-between pb-3">
                            <div> {{ item.firstname}} {{ item.lastname }} </div>
                            <div> <span v-if="item.isNew"> NEW ! </span> <small class="text-muted">{{ setDate(item.dateOfModification) }}</small></div>
                        </div>
                        <h5 class="card-title rounded">{{item.title}}</h5>
                        <p>
                            <img :src="item.imageUrl" class="card-img-bottom" :alt="item.title" v-if="item.isGif == 1">
                        </p>
                        <p class="card-text rounded" v-if="item.isGif == 2">{{ item.content }}</p>
                        <div class="d-flex justify-content-end" v-if="item.isGif == 2 && item.content.split(/\r\n|\r|\n/).length >= 2">
                            <router-link :to="{ name: 'Article', params: { idArticle: item.idArticle }}" class="btn stretched-link commentBtn rounded-pill">Lire la suite</router-link>
                        </div>
                        <div class="d-flex justify-content-end" v-if="item.isGif == 1 || item.content.split(/\r\n|\r|\n/).length <= 2">
                            <router-link :to="{ name: 'Article', params: { idArticle: item.idArticle }}" class="btn stretched-link commentBtn rounded-pill">Commenter</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn" @click="moreArticles()" v-if="this.articles.length >= this.numberOfArticles">Voir plus</button>
        </div>
    </div>
</template>

<script>
import NavApp from '@/components/Nav-app.vue'
import ArticleForm from '@/components/ArticleForm.vue'

export default {
    components: {
        NavApp,
        ArticleForm
    },
    data() {
        return {
            articles: [],
            numberOfArticles: 5,
            errorJwt: {
                message: ""
            }
        }
    },
    mounted() {
        this.getData()
    },
    updated() {
        document.cookie = "lastLog=" + this.getCookie("presentLog");
        document.cookie = "presentLog=" + Date.now();
    },
    methods: {
        getData() {
            this.$http.get('http://localhost:3000/api/articles' + `?nbOfArticles=${this.numberOfArticles}`, {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then((response) => {
                this.articles = response.data
                this.addNNewParams()
            }, (response) => {
                if(response.body.error.name == "TokenExpiredError") {
                    this.errorJwt.message = "Session expirée. Veuillez vous déconnecter."
                }
                console.log('erreur', response)
            })
        },
        addNNewParams() {
            for (var i = 0; i < this.articles.length; i++) {
                const dateOfArticle = new Date(this.articles[i].dateOfModification)
                const timeStampOfArticle = Date.parse(dateOfArticle)
                const lastLog = parseInt(this.getCookie("lastLog"))
                const presentLog = parseInt(this.getCookie("presentLog"))
                if(timeStampOfArticle >= lastLog && timeStampOfArticle <= presentLog) {
                    this.articles[i].isNew = true;
                }
            }
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
        moreArticles() {
            this.numberOfArticles += 5;
            this.getData()
        },
        setDate(timeStamp) {
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
        border:$article-color ;
        box-shadow: $article-shadow-color 2px 2px;
        text-align: start;
    }
    .card-title {
        background-color: white;
        padding-left: 15px;
        padding-top: .3rem;
        padding-bottom: .3rem;
    }
    .card-text {
        padding-left: 15px;
        background-color: white;
        padding-top: .3rem;
        padding-bottom: .3rem;
        max-height: 100px;
        overflow: hidden;
    }
    .commentBtn {
        font-weight: 900;
        color: white;
        background-color: $base-color-1-primary;
        padding-right: 2rem;
        padding-left: 2rem;
    }
</style>