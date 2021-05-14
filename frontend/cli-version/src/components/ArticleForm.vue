<template>
    <div class="row  mt-3 mb-3 justify-content-md-center" id="articleForm">
        <div class="card mb-3 article">
            <form class="card-body">
                <label for="title" class="d-none">Title</label>
                <input type="text" 
                class="card-title rounded-pill form-control" 
                placeholder="Title" 
                v-model="article.title">
                <div class="d-flex mb-2">
                    <button class="btn choiceBtn rounded-pill" @click="displayTexteMethod" :class="{ 'active': displayTexte }">Texte</button>
                    <button class="btn choiceBtn rounded-pill" @click="displayImageMethod" :class="{ 'active': displayImage }">Image</button>
                </div>
                <div class="d-flex justify-content-between align-items-end" v-if="displayTexte">
                    <label for="content" class="d-none">Description</label>
                    <textarea name="content"
                                id="content"
                                cols="6" rows="1"
                                class="form-control"
                                formControlName="content"
                                placeholder="Contenu de l'article"
                                v-model="article.content">
                    </textarea>
                    <button class="btn postBtn rounded-pill" @click="postTexte">Publier</button>
                </div>
                <div class="d-flex justify-content-between align-items-end" v-if="displayImage">
                    <label for="image" class="d-none">Image</label>
                    <input type="file" class="form-control" id="image" @change="onFileSelected">
                    <button class="btn postBtn rounded-pill" @click="postGif">Publier</button>
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
            this.$parent.getData();
        },
        postGif(e) {
            e.preventDefault();
            var formData = new FormData();
            formData.append("title", this.article.title);
            formData.append("image", this.selectedFile, this.selectedFile.name);
            formData.append("isGif", 1);
            formData.append("idUser", this.getCookie('userId'));
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
        postTexte(e) {
            e.preventDefault();
            this.$http.post('http://localhost:3000/api/articles', {
                title: this.article.title,
                content: this.article.content,
                isGif: 2,
                idUser: this.getCookie('userId')
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
    #articleForm .choiceBtn {
        color: #091f43;
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
        border: solid 2px red;
        &:hover {
            background-color: rosybrown;
        }
    }
    .active{
        background-color: #9da5b4 !important;
    }

</style>