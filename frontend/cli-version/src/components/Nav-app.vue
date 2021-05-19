<template>
    <nav class="navbar">
        <div class="container-fluid">
            <router-link :to="{ name: 'Articles'}" class="navbar-brand">Logo</router-link>
            <p> Bienvenue {{ getCookie('firstname') }}</p>
            <router-link :to="{ name: 'Articles'}" class="nav-link">Profil</router-link>
            <router-link :to="{ name: 'Articles'}" class="nav-link">Rechercher</router-link>
            <button class="btn" @click="signout">Déconnexion</button>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav-app',
  methods: {
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
        signout() {
            document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            document.cookie = "lastname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            document.cookie = "path=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            this.$router.push("./");     
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-home {
    background-color: #091f43;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
}
</style>
