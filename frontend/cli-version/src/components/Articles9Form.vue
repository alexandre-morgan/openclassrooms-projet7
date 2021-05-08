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
            </div>
            <div class="form-group">
                <label for="imageUrl">Image</label>
                <input type="file" @change="onFileSelected">
            </div>
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
            },
            selectedFile: null
        }
    },
    methods: {
        getData() {
            this.$parent.getData();
        },
        doPost(e) {
            e.preventDefault();
            var formData = new FormData();
            formData.append("title", this.article.title);
            formData.append("image", this.selectedFile, this.selectedFile.name);
            formData.append("isGif", 1);
            formData.append("idUser", 28);
            this.$http.post('http://localhost:3000/api/articles', formData).then(() => {
                this.getData();
            }, (response) => {
                console.log('erreur', response)
            })
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        }
    }
}
</script>
