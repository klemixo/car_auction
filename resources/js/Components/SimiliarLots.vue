<template>
  <div>
    <h2>Similiar lots</h2>
    <div class="similiar-lots">
      <template v-for="car in carData">
        <div class="lot">
          <CarBox :carData="car" :small="true" :noBadge="true" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CarBox from "../Components/CarBox.vue";
export default {
  props: ["id", "make", "model"],
  components: {
    CarBox,
  },
  data() {
    return {
      carData: null,
    };
  },
  mounted() {
    this.getCarData();
  },
  methods: {
    getCarData() {
      axios
        .get(`/api/similiar-cars?make=${this.make}&model=${this.model}`)
        .then((res) => {
          this.carData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  h2 {
    text-align: left;
  }
}
.similiar-lots {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  @media (min-width: 576px) {
    justify-content: unset;
  }
}
</style>