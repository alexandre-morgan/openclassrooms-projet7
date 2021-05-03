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
                <label for="imageUrl">URL de l'image</label>
                <textarea name="imageUrl"
                            id="imageUrl"
                            cols="30" rows="7"
                            class="form-control"
                            formControlName="imageUrl"
                            placeholder="Contenu de l'article"
                            v-model="article.imageUrl"></textarea>
            </div>
            <div> {{ article.imageUrl }} </div>
            <button class="btn btn-success" @click="doPost">Valider</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: 'Articles9Form',
    data() {
        return {
            article: {
                title: "",
                imageUrl: ""
            }
        }
    },
    methods: {
        doPost(e) {
            e.preventDefault();
            this.$http.post('http://localhost:3000/api/articles9', this.article).then((response) => {
                console.log(response)
                this.$router.push("/9gag")
            }, (response) => {
                console.log('erreur', response)
            })
        }
    }
}
</script>
