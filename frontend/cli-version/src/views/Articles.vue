<template>
    <div id="articles">
        <NavApp/>
        <div class="container-md">
            <ArticleForm v-if="getCookie('userId') !== ''"/>
            <div class="row  mt-3 mb-3 justify-content-md-center" v-for="item in articles" :key="item.idArticle">
                <div class="card mb-3 article">
                    <div class="card-body">
                        <div class="d-flex justify-content-between pb-3">
                            <div> {{ item.firstname}} {{ item.lastname }} </div>
                            <div><small class="text-muted">{{ item.dateOfModification }}</small></div>
                        </div>
                        <h5 class="card-title rounded-pill">{{item.title}}</h5>
                        <p>
                            <img :src="item.imageUrl" class="card-img-bottom" :alt="item.title" v-if="item.isGif == 1">
                        </p>
                        <p class="card-text rounded-pill" v-if="item.isGif == 2">{{ item.content }}</p>
                        <div class="d-flex justify-content-end">
                            <router-link :to="{ name: 'Article', params: { idArticle: item.idArticle }}" class="btn stretched-link commentBtn rounded-pill">Commenter</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn" @click="moreArticles()">Voir plus</button>
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
            numberOfArticles: 5
        }
    },
    mounted() {
        this.getData()
    },

    methods: {
        getData() {
            this.$http.get('http://localhost:3000/api/articles' + `?nbOfArticles=${this.numberOfArticles}`, {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then((response) => {
                this.articles = response.data
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
        },
        moreArticles() {
            this.numberOfArticles += 5;
            this.getData()
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
        padding-top: .3rem;
        padding-bottom: .3rem;
    }
    .card-text {
        padding-left: 15px;
        background-color: white;
        padding-top: .3rem;
        padding-bottom: .3rem;
    }
    .commentBtn {
        font-weight: 900;
        color: white;
        background-color: #091f43;
        padding-right: 2rem;
        padding-left: 2rem;
    }
</style>