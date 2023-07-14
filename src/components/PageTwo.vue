<template>
    <h1> Page One</h1>
    <div>
        <img :src="fethedData.url"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
    name: 'PageOne',
    props: {
    
    },
    data() {
        return {
            fethedData: 'testValue',
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            const axios = require('axios');
            const thisInstance = this

            // Make a request for a user with a given ID
            axios.get('https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=j8VSUPD1m6SzEAhbMrxSUnbimFteiKOTBuabU9JN')
            .then(function (response: any) {
                // handle success
                // console.log(response.data);
                // console.log(thisInstance.fethedData, 'fethedData')

                thisInstance.fethedData = response.data
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        },
    }
});



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
