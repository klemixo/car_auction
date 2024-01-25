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
.home{
  padding-top:80px;
  @media(min-width:768px){
    padding-top:50px;
  }
}
.car-box {
  margin: 20px;
}
</style>
