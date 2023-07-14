<template>
    
    <ul @click="isDropDownOpen = !isDropDownOpen">
        Select from the available dates
        <template v-if="isDropDownOpen">

            <li v-for="availableDate in fethedData" :key="availableDate" @click="getImageByParams(availableDate)">{{availableDate.date}}</li>
        </template>
        
    </ul>

    <img :src="selectedImage"/>

  
</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
    name: 'PageOne',
    props: {
    
    },
    data() {
        return {
            fethedData: '',
            mostRecentImage: {},
            selectedImage: '',
            isDropDownOpen: false,
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
            axios.get('https://api.nasa.gov/EPIC/api/enhanced?api_key=j8VSUPD1m6SzEAhbMrxSUnbimFteiKOTBuabU9JN')
            .then(function (response: any) {
                

                thisInstance.fethedData = response.data
                thisInstance.mostRecentImage = thisInstance.fethedData[0]

                thisInstance.getImageByParams(thisInstance.fethedData[0])
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

        },
        getImageByParams(imageData: any) {
            const imageDate = imageData.date.split(' ')[0]
            const year = imageDate.split('-')[0]
            const month = imageDate.split('-')[1]
            const day = imageDate.split('-')[2]
            const imageFile = imageData.image



            this.selectedImage = `https://epic.gsfc.nasa.gov/archive/enhanced/${year}/${month}/${day}/png/${imageFile}.png`
        },
    }
});



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-direction: column;
}
</style>
