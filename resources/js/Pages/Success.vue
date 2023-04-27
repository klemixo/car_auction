<template>
  <div class="error-box">
    <img src="img/check.svg" alt="" />
    <h2>Success!</h2>
    <p>
      Your payment was successful! In couple minutes lot will be not visible on
      our website. Thanks for using VINFAX!
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  mounted() {
    axios
      .post("/api/claim", {
        vin: this.id.split("-")[0],
        stock: this.id.split("-")[1],
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  },
};
//przepiać na produkcyny product id,
</script>

<style lang="scss" scoped>
.error-box {
  margin-top: 24px;
}
</style>