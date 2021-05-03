<template>
<div class="new-article">
    <div class="col-sm-6 offset-sm-3 mt-2">
        <form>
            <div class="form-group">
                <label for="title">Titre</label>
                <input type="text" 
                        placeholder="Titre de l'article?" 
                        id="title" 
                        formControlName="title" 
                        class="form-control"
                        v-model="article.title" >
            <div> {{ article.title }} </div>
            </div>
            <div class="form-group">
                <label for="content">Description</label>
                <textarea name="content"
                            id="content"
                            cols="30" rows="7"
                            class="form-control"
                            formControlName="content"
                            placeholder="Contenu de l'article"
                            v-model="article.content"></textarea>
            </div>
            <div> {{ article.content }} </div>
            <button class="btn btn-success" @click="doPost">Valider</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: 'ArticlesRForm',
    data() {
        return {
            article: {
                title: "",
                content: ""
            }
        }
    },
    methods: {
        doPost(e) {
            e.preventDefault();
            this.$http.post('http://localhost:3000/api/articlesR', this.article).then((response) => {
                console.log(response)
                this.$router.push("/reddit")
            }, (response) => {
                console.log('erreur', response)
            })
        }
    }
}
</script>
