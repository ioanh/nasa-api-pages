<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link v-if="!isLoggedIn" to="/Register">Register</router-link> 
    <router-link v-if="!isLoggedIn" to="/SignIn">Log in</router-link> 
    <router-link v-if="isLoggedIn" to="/PageOne">Page one</router-link>
    <router-link v-if="isLoggedIn" to="/PageTwo">Page two</router-link>
    <router-link v-if="isLoggedIn" to="/PageThree">Page three</router-link>

    <button v-if="isLoggedIn" @click="signOut()"> Sign out</button>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth'

export default defineComponent({
  name: 'App',
  components: {
  
  },
  data() {
    return {
      isLoggedIn: false,
      authentication: {}
    }
  },
  mounted() {

    onAuthStateChanged(getAuth(), (user) => {

      if(user) {
        this.isLoggedIn = true
      }
    })
  },
  methods: {
    signOut() {
      signOut(getAuth())
      .then(() => {
        alert('Youve logged out')
         this.isLoggedIn = false
      })
    }
  }
});
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  background: #F8F8F8;
  color: #FFFFFF;
  font-weight: bold;
  
}

a {
    text-decoration: none;
    color: #000000;
    margin: 0 10px;
  }

main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

img {
    max-width: 100%;
    max-height: 100%;
}
</style>
