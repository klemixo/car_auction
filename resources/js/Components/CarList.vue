<template>
  <div class="cars__container container">
    <h2 v-if="cars && cars.length > 0">Latest Lots</h2>
    {{ foundCars }}
    page -- {{ currentPage }}
    <CurrentFilters/>
    <div class="cars__container__filters">
    <div class="grid" >
        <CarBox v-for="car in cars" :key="car.id" :carData="car"/>
    </div>
    <Loader v-if="dataLoading"/>
    <Error v-if="cars && cars.length === 0"/>
    <FiltersRight/>
    </div>
    <button @click="showMore"  v-if="cars && cars.length > 0" class="base-btn more-results-btn">More results</button>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../Store';
import CarBox from './CarBox.vue';
import Error from './Error.vue';
import Loader from './Loader.vue';
import FiltersRight from './FiltersRight.vue';
import CurrentFilters from './CurrentFilters.vue';
export default {
  name: 'home',
  components:{
    CarBox,
    Error,
    Loader,
    FiltersRight,
    CurrentFilters
  },
  mounted() {
    store.commit('GET_CARS');
  },
  methods: {
    showMore(){
      ++this.$store.state.currentPage 
    }
  },
  computed: {
    ...mapState({
      count: state => state.count,
      cars: state => state.cars,
      foundCars: state => state.foundCars,
      currentPage: state => state.currentPage,
      dataLoading: state => state.dataLoading
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
