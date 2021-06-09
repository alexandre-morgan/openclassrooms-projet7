<template>
    <div class="row  mt-3 mb-3 justify-content-md-center" id="articleForm">
        <div class="card mb-3 article">
            <form class="card-body" @submit="postSelection" id="form">
                <div class="d-flex mb-2">
                    <button class="btn choiceBtn rounded-pill" @click="displayTexteMethod" :class="{ 'active': displayTexte }">Texte</button>
                    <button class="btn choiceBtn rounded-pill" @click="displayImageMethod" :class="{ 'active': displayImage }">Image</button>
                </div>
                <label for="title" class="d-none">Title</label>
                <input type="text" 
                class="card-title rounded-pill form-control" 
                placeholder="Title" required
                v-model="article.title">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-end">
                    <textarea name="content"
                                id="content"
                                cols="6" rows="3"
                                class="form-control"
                                formControlName="content"
                                placeholder="Contenu de l'article" required
                                v-model="article.content"  v-if="displayTexte">
                    </textarea>
                    <input type="file" class="form-control" id="inputFile" @change="onFileSelected" required  v-if="displayImage">
                    <button class="btn postBtn rounded-pill" type="submit">Publier</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleForm',
    data() {
        return {
            article: {
                title: '',
                content: ''
            },
            displayImage: false,
            displayTexte: true
        }
    },
    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        displayImageMethod(e) {
            e.preventDefault()
            this.displayImage = true;
            this.displayTexte = false;
        },
        displayTexteMethod(e) {
            e.preventDefault()
            this.displayImage = false;
            this.displayTexte = true;
        },
        getData() {
            this.$parent.getData(this.$parent.numberOfArticles);
        },
        postSelection(event){
            event.preventDefault()
            if(this.displayImage == true){this.postGif()}
            else{this.postTexte()}
        },
        postGif() {
            var formData = new FormData();
            formData.append("title", this.article.title);
            formData.append("image", this.selectedFile, this.selectedFile.name);
            formData.append("isGif", 1);
            formData.append("userId", this.getCookie('userId'));
            this.$http.post('http://localhost:3000/api/articles', formData, {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then(() => {
                this.resetArticle();
                this.getData();
            }, (response) => {
                console.log('erreur', response)
            })
        },
        postTexte() {
            this.$http.post('http://localhost:3000/api/articles', {
                title: this.article.title,
                content: this.article.content,
                isGif: 2,
                userId: parseInt(this.getCookie('userId'),10)
            },{
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then(() => {
                this.resetArticle();
                this.getData();
            }, (response) => {
                console.log('erreur', response)
            })
        },
        resetArticle() {
            this.article.title = "";
            this.article.content = "";
            if(this.displayImage) {
                const inputFile = document.getElementById('inputFile');
                inputFile.value = null;
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
        }

    }
}
</script>


<style scoped lang="scss">
@import "../styles/_variables.scss";

    .article {
        background-color:$article-color ;
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
    #articleForm .choiceBtn {
        color: $base-color-1-primary;
        background-color: white;
        padding-right: 2rem;
        padding-left: 2rem;
        margin-right:2rem;
        border: solid 2px #091f43;
    }
    #articleForm .postBtn {
        font-weight: 900;
        color: #091f43;
        background-color: white;
        padding-right: 2rem;
        padding-left: 2rem;
        margin-left:2rem;
        margin-top: .5rem;
        border: solid 2px $base-color-2-primary;
        background: linear-gradient(to right, $base-color-2-secondary 50%, white 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all .3s ease-out;
        &:hover {
            background-position: left bottom;
        }
    }
    
    .active{
        background-color: $base-color-1-secondary !important;
    }

</style>