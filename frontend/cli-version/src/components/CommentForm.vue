<template>
    <div class="row  mt-3 mb-3 justify-content-md-center" id="commentForm">
        <div class="card mb-3 article">
            <form class="card-body">
                <label for="content">Commentaire</label>
                <textarea name="content"
                            id="content"
                            cols="6" rows="3"
                            class="form-control"
                            formControlName="content"
                            placeholder="Commentaire"
                            v-model="comment.content">
                </textarea>
                <div class="d-flex justify-content-end">
                    <button class="btn postBtn rounded-pill" @click="postComment">Publier le commentaire</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentForm',
    data() {
        return {
            comment: {
                content: ''
            }
        }
    },
    methods: {
        postComment(e) {
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
        resetComment() {
            this.comment.content = "";
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
    #commentForm .choiceBtn {
        color: #091f43;
        background-color: white;
        padding-right: 2rem;
        padding-left: 2rem;
        margin-right:2rem;
        border: solid 2px #091f43;
    }
    #commentForm .postBtn {
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