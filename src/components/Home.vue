<template>

 <h1> Greetings, dear user! <br/> This is a simple SPA built with Vue 3. <br/> It uses vue router for the navigation and the official NASA API's are used in the different pages.</h1>
   
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeName',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
