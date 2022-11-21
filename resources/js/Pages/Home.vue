<template>
  <div class="home">
    <div class="car-box" v-for="car in cars" :key="car.id">
    {{ car }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      cars:null,
    }
  },
  mounted() {
    axios.get('/api/cars').then(res=>{
      console.log(res)
      this.cars= res.data
      console.log(this.cars)
    }).catch(err=>{
      console.log(err)
    })
  },
  computed: {
    ...mapState({
      count: state => state.count
    }),
  }
}
</script>
<style>
.car-box{
  margin:20px;
}
</style>
