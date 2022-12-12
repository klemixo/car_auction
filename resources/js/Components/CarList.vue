<template>
  <div class="cars__container container">
    <h2>Latest Lots</h2>
    <div class="cars__container__filters">
    <div class="grid">
        <CarBox v-for="car in cars" :key="car.id" :carData="car"/>
    </div>
    <FiltersRight/>
    </div>
    <button class="base-btn more-results-btn">More results</button>

    <Error v-if="cars && cars.length === 0"/>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../Store';
import CarBox from './CarBox.vue';
import Error from './Error.vue';
import FiltersRight from './FiltersRight.vue';
export default {
  name: 'home',
  components:{
    CarBox,
    Error,
    FiltersRight
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
    .more-results-btn{
      margin-top:32px;
    }
    &__filters{
      display: flex;
      gap:20px;
      flex-direction: column-reverse;
      @media(min-width:992px){
        flex-direction: row;
      }
    }
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
        @media(min-width:576px){
        grid-template-columns: 1fr 1fr;
        }
        @media(min-width:1200px){
        grid-template-columns: 1fr 1fr 1fr;
        }
    }
}
</style>
