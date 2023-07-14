<template>
    
    <label for="datePicker">Select image from specified date</label>
    <input name="datePicker" type="date" v-model="selectedDate" @change="selectImageDate()" >
    <img :src="fethedData.url"/>
    
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
            selectedDate: ''
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        selectImageDate() {
            console.log(this.selectedDate)
            this.getData(this.selectedDate)
        },
        getData(dateSelected = '') {
            const axios = require('axios');
            const thisInstance = this
            const url = dateSelected ? `https://api.nasa.gov/planetary/apod?date=${dateSelected}&api_key=j8VSUPD1m6SzEAhbMrxSUnbimFteiKOTBuabU9JN` : 'https://api.nasa.gov/planetary/apod?api_key=j8VSUPD1m6SzEAhbMrxSUnbimFteiKOTBuabU9JN'

            // Make a request for a user with a given ID
            axios.get(url)
            .then(function (response: any) {
                // handle success
                // console.log(response.data);
                // console.log(thisInstance.fethedData, 'fethedData')

                thisInstance.fethedData = response.data
            })
            .catch(function (error: any) {
                // handle error
                alert(error?.response?.data?.msg);
                
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
input {
    margin: 10px 0;
}
</style>
