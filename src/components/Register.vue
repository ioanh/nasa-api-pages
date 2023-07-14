<template>
    <h1> Register</h1>
    
    <input type="email" placeholder="Enter email..." v-model="email">
    <input type="password"  placeholder="Enter password..." v-model="password">
    <button @click="register()">Submit</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


export default defineComponent({
    name: 'RegisterPage',
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
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
            .then((data: any) => {
                console.log('creates sucessfully', data)
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
