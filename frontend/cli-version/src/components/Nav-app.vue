<template>
    <nav class="navbar" id="navApp">
        <div class="container-fluid">
            <router-link :to="{ name: 'Articles'}" class="navbar-brand">
                <img src="../assets/logo_groupomania_nav_mini.png" alt="Logo Groupomania" class="d-inline-block align-text-top">
            </router-link>
            <div class="text-white"> Bienvenue {{ getCookie('firstname') }}</div>
            <router-link :to="{ name: 'Profile'}" class="btn-navApp btn">
                <img src="../assets/file-person.svg" alt="Profile">
            </router-link>
            <button class="btn btn-navApp" @click="signout">
                <img src="../assets/box-arrow-right.svg" alt="Logout">
            </button>
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
        signout(e) {
            e.preventDefault()
            document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            document.cookie = "lastname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            document.cookie = "path=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            this.$router.push("/");     
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#navApp {
    background-color: #091f43;
}
.btn-navApp {
    background-color: white;
}
</style>
