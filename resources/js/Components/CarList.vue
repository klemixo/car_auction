<template>
  <div class="cars__container container">
    <BreadCrumb />
    <h2 v-if="cars && cars.length > 0">Latest Lots</h2>
    <CurrentFilters />
    <div class="cars__container__filters">
      <div class="grid" :class="{ 'grid-small': searched }">
        <CarBox
          v-for="car in cars"
          :key="car.id"
          :carData="car"
          :searched="searched"
        />
      </div>
      <Loader v-if="dataLoading" />
      <Error v-if="cars && cars.length === 0" />
      <FiltersRight v-if="searched" />
    </div>
    <button
      @click="showMore"
      v-if="cars && cars.length > 0 && foundCars > currentPage * 15"
      class="base-btn more-results-btn"
    >
      More results
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import store from "../Store";
import CarBox from "./CarBox.vue";
import Error from "./Error.vue";
import Loader from "./Loader.vue";
import FiltersRight from "./FiltersRight.vue";
import BreadCrumb from "./BreadCrumb.vue";
import CurrentFilters from "./CurrentFilters.vue";
export default {
  name: "home",
  components: {
    CarBox,
    Error,
    Loader,
    FiltersRight,
    BreadCrumb,
    CurrentFilters,
  },
  mounted() {
    store.commit("GET_CARS");
  },
  methods: {
    showMore() {
      ++this.$store.state.currentPage;
      store.commit("GET_CARS");
    },
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
      foundCars: (state) => state.foundCars,
      currentPage: (state) => state.currentPage,
      dataLoading: (state) => state.dataLoading,
      searched: (state) => state.searched,
    }),
    ...mapGetters({
      cars: "getCarsList",
    }),
  },
};
</script>
<style lang="scss">
.cars__container {
  max-width: 1300px !important;
  .more-results-btn {
    margin-top: 32px;
  }
  &__filters {
    display: flex;
    gap: 20px;
    flex-direction: column-reverse;
    @media (min-width: 992px) {
      flex-direction: row;
    }
  }
  h2 {
    font-family: "PT Sans";
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    text-align: left;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1300px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    &.grid-small {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
}
</style>
