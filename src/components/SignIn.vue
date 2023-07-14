<template>
    <h1> Log in</h1>
    
    <input type="email" placeholder="Enter email..." v-model="email">
    <input type="password"  placeholder="Enter password..." v-model="password">
    <button @click="register()">Submit</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';


export default defineComponent({
    name: 'LoginPage',
    props: {
    
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    mounted() {
       
    },
    methods: {
        register() {
            signInWithEmailAndPassword(getAuth(), this.email, this.password)
            .then((data: any) => {
                console.log('logged in  sucessfully', data)
                
            })
            .catch((error:any) => {
                alert(error)
            })
        },
    }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
