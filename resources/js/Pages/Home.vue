<template>
  <div class="home">
    <FiltersTop />
    <CarList />
  </div>
</template>

<script>
import CarList from "../Components/CarList.vue";
import FiltersTop from "../Components/FiltersTop.vue";
export default {
  name: "home",
  components: {
    CarList,
    FiltersTop,
  },
};
</script>
<style>
.car-box {
  margin: 20px;
}
</style>
