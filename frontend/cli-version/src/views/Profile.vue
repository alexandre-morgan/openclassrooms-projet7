<template>
    <div id="profile">
        <NavApp ref="foo"/>
        <div class="alert alert-danger" v-if="errorJwt.message !== ''"> {{ this.errorJwt.message }} </div>
        <div class="container-md" v-if="!(errorJwt.message !== '')">
            <div class="row mt-3 mb-3 justify-content-md-center">
                <form class="col-lg-8" @submit="ctrlPassword">
                    <div class="text-start mb-3">
                        <router-link :to="{ name: 'Articles'}" class="text-muted ">Précedent</router-link>
                    </div>
                    <h3 class="profile-title rounded-pill form-control">
                        Mes informations
                    </h3>
                    <input type="text" class="rounded-pill form-control" v-model="user.firstname" required>
                    <input type="text" class="rounded-pill form-control" v-model="user.lastname" required>
                    <input type="email" class="rounded-pill form-control" v-model="user.email" required>
                    <h3 class="profile-title rounded-pill form-control mt-3">
                        Modifier mon mot de passe
                    </h3>
                    <input type="password" placeholder="Nouveau mot de passe" class="rounded-pill form-control" value="" v-model="user.password1">
                    <input type="password" placeholder="Confirmer le nouveau mot de passe" class="rounded-pill form-control" value="" v-model="user.password2">
                    <div class="d-flex justify-content-end mb-3 mt-3">
                        <button class="btn deletebtn rounded-pill" @click="deleteUser()">
                            Supprimer mon compte
                        </button>
                        <button class="btn submitBtn rounded-pill" type="submit">
                            Valider les informations
                        </button>
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="this.error.active">
                        {{ this.error.message }}
                    </div>
                </form>
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
            },
            error: {
                active: false,
                message: ""
            },
            errorJwt: {
                message: ""
            }
        }
    },
    components: {
        NavApp
    },
    mounted() {
        this.getUser();
    },
    methods: {
        getUser() {
            this.$http.get('http://localhost:3000/api/users/' + this.getCookie("userId"), {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then((response) => {
                this.user = response.data
                this.user.password1 = "";
                this.user.password2 = "";
            }, (response) => {
                console.log('erreur', response)
                if(response.body.error.name == "TokenExpiredError") {
                    this.errorJwt.message = "Session expirée. Veuillez vous déconnecter."
                }
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
            }).then(() => {
                document.cookie = "firstname=" + this.user.firstname;
                document.cookie = "lastname=" + this.user.lastname;
                this.$router.push("articles");
            }, (response) => {
                this.error.active = true;
                this.error.message = this.customError(response.body.error.errno)
            })
        },
        modifyUserWPassword(){
            this.$http.put('http://localhost:3000/api/users/' + this.getCookie("userId"), {
                firstname: this.user.firstname,
                lastname: this.user.lastname,
                email: this.user.email,
                password: this.user.password1
            }, {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then(() => {
                document.cookie = "firstname=" + this.user.firstname;
                document.cookie = "lastname=" + this.user.lastname;
                this.$router.push("Articles");
            }, (response) => {
                this.error.active = true;
                this.error.message = this.customError(response.body.error.errno)
            })
        },
        deleteUser(){
            this.$http.delete('http://localhost:3000/api/users/' + this.getCookie("userId"), {
                headers: {
                    authorization: "Basic " + this.getCookie('token')
                }
            }).then(() => {
                this.$refs.foo.signout()
            }, (response) => {
                this.error.active = true;
                this.error.message = this.customError(response.body.error.errno)
            })
        },
        ctrlPassword(e) {
            e.preventDefault()
            if(this.user.password1 == "" && this.user.password2 == "") {
                this.modifyUser()
            }else if(this.user.password1 === this.user.password2) {
                this.modifyUserWPassword()
            }else {
                this.error.active = true;
                this.error.message = this.customError(10)
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
        },
        customError(code) {
            if(code == 1062){
                return "Email déjà utilisé par un autre utilisateur."
            }
            if(code == 10){ return "Veuillez choisir deux mots de passe identiques"}
        }
    }
}
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.profile-title {
    color: white;
    background-color: $base-color-1-primary;
}
#profile input {
    border-color:$base-color-1-primary;
    border-width: 2px;
    margin-bottom: 3px;
}
.submitBtn {
    color: #091f43;
    background-color: white;
    padding-right: 2rem;
    padding-left: 2rem;
    margin-left: 2rem;
    border: solid 2px $base-color-1-primary;
    background: linear-gradient(to right, $base-color-1-secondary 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .3s ease-out;
    &:hover {
        background-position: left bottom;
    }

}
.deletebtn {
    color: #091f43;
    background-color: white;
    padding-right: 2rem;
    padding-left: 2rem;
    border: solid 2px $base-color-2-primary;
    background: linear-gradient(to right, $base-color-2-secondary 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .3s ease-out;
    &:hover {
        background-position: left bottom;
    }

}


</style>