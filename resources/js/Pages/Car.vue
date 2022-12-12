<template>
    <div>
        Car page {{ id }}
        {{ carData }}
    </div>
</template>

<script>
import axios from 'axios'
    export default {
     props:["id"],
     data() {
        return {
            carData:null,
        }
     },
     mounted() {
        this.getCarData()
     },
     methods: {
        getCarData(){
            axios.get(`/api/cars/${this.id}`).then(res=>{
                console.log(res)
                this.carData = res.data
            }).catch(err=>{
                console.log(err)
            })
        }
     },
    }
</script>

<style lang="scss" scoped>

</style>