<template>
    <div class="row  mt-3 mb-3 justify-content-md-center" id="commentForm">
        <div class="card mb-3 article">
            <form class="card-body">
                <label for="content" class="d-none">Commentaires</label>
                <textarea name="content"
                            id="content"
                            cols="6" rows="3"
                            class="form-control"
                            formControlName="content"
                            placeholder="Laisser un commantaire"
                            v-model="comment.content">
                </textarea>
                <div class="d-flex justify-content-end mt-3">
                    <button class="btn postBtn rounded-pill" @click="postComment">Publier</button>
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
        getData() {
            this.$parent.getComments()
        },
        postComment(e) {
            e.preventDefault();
            this.$http.post('http://localhost:3000/api/comments', {
                content: this.comment.content,
                idArticle: this.$parent.article.idArticle,
                userId: parseInt(this.getCookie('userId'))
            },{
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then(() => {
                this.resetComment();
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

</style>