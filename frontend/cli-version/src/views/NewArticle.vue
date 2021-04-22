<template>
<div class="new-article">
    <div class="col-sm-6 offset-sm-3 mt-2">
        <form>
            <div class="form-group">
                <label for="title">Titre</label>
                <input type="text" placeholder="Titre de l'article?" id="title" formControlName="title" class="form-control">
            </div>
            <div class="form-group">
                <label for="content">Description</label>
                <textarea name="content"
                            id="content"
                            cols="30" rows="7"
                            class="form-control"
                            formControlName="content"
                            placeholder="Contenu de l'article"></textarea>
            </div>
            <button class="btn btn-success" >Valider</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    doPost() {
        this.$http.post('http://localhost:3000/api/articles', {

        }).then((response) => {
            console.log(response)
        }, (response) => {
            console.log('erreur', response)
        })
    }
}
</script>
