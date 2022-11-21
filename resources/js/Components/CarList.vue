<template>
  <div class="cars__container">
    <h2>Latest Lots</h2>
    <div class="grid">
        <CarBox v-for="car in cars" :key="car.id" :carData="car"/>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../Store';
import CarBox from './CarBox.vue';
export default {
  name: 'home',
  components:{
    CarBox
  },
  mounted() {
    store.commit('GET_CARS');
  },
  computed: {
    ...mapState({
      count: state => state.count,
      cars: state => state.cars
    }),
  }
}
</script>
<style lang="scss">
.cars__container{
    padding:0 10px;
    h2{
        font-family: 'PT Sans';
        font-weight: 700;
        font-size: 36px;
        line-height: 47px;
        text-align: left;
    }
    .grid{
        display:grid;
        grid-template-columns: 1fr;
        gap:24px;
        @media(min-width:768px){
        grid-template-columns: 1fr 1fr;
        }
        @media(min-width:1200px){
        grid-template-columns: 1fr 1fr 1fr;
        }
    }
}
</style>
