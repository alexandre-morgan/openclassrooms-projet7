<template>
    <div id="profile">
        <NavApp/>
        <div class="container-md">
            <form class="row  mt-3 mb-3 justify-content-md-center">
                <div class="text-start mb-3">
                    <router-link :to="{ name: 'Articles'}" class="text-muted ">Précedent</router-link>
                </div>
                <h3 class="profile-title rounded-pill form-control">
                    Mes informations
                </h3>
                <input type="text" class="rounded-pill form-control" v-model="user.firstname">
                <input type="text" class="rounded-pill form-control" v-model="user.lastname">
                <input type="email" class="rounded-pill form-control" v-model="user.email">
                <h3 class="profile-title rounded-pill form-control mt-3">
                    Modifier mon mot de passe
                </h3>
                <input type="password" placeholder="Nouveau mot de passe" class="rounded-pill form-control">
                <input type="password" placeholder="Confirmer le nouveau mot de passe" class="rounded-pill form-control">
            </form>
            <div class="d-flex justify-content-end mb-3">
                <button class="btn deletebtn rounded-pill">
                    Supprimer mon compte
                </button>
                <button class="btn submitBtn rounded-pill" @click="modifyUser()">
                    Valider les informations
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import NavApp from "../components/Nav-app"

export default {
    data() {
        return {
            user: {
                firstname: "",
                lastname: "",
                email: "",
                password1: "",
                password2: ""
            }
        }
    },
    components: {
        NavApp
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            this.$http.get('http://localhost:3000/api/users/' + this.getCookie("userId"), {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then((response) => {
                this.user = response.data
            }, (response) => {
                console.log('erreur', response)
            })
        },
        modifyUser(){
            this.$http.put('http://localhost:3000/api/users/' + this.getCookie("userId"), {
                firstname: this.user.firstname,
                lastname: this.user.lastname,
                email: this.user.email
            }, {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then((response) => {
                console.log(response.data.message)
            }, (response) => {
                console.log('erreur', response)
            })
        },
        ctrlPassword() {
            if(this.user.password1 == "") {
                return 1
            }else if(this.user.password1 !== this.user.password2) {
                return 2
            }else return 3
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
.profile-title {
    color: white;
    background-color: #091f43;
}
#profile input {
    border-color:#091f43;
    border-width: 2px;
    margin-bottom: 3px;
}
.submitBtn {
    color: #091f43;
    background-color: white;
    padding-right: 2rem;
    padding-left: 2rem;
    margin-left: 2rem;
    border: solid 2px #091f43;
}
.deletebtn {
    color: #091f43;
    background-color: white;
    padding-right: 2rem;
    padding-left: 2rem;
    border: solid 2px red;
    &:hover {
        background-color: rosybrown;
    }
}


</style>