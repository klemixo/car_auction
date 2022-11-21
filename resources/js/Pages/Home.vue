<template>
  <div class="home">
    <CarList/>
  </div>
</template>

<script>
import CarList from '../Components/CarList.vue';
export default {
  name: 'home',
  components:{
    CarList,
  }
}
</script>
<style>
.car-box{
  margin:20px;
}
</style>
