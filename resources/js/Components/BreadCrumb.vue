<template>
  <div class="breadcrumbs">
    <div class="breadcrumb">Home</div>
    <div class="breadcrumb breadcrumb--blue">></div>
    <div class="breadcrumb">Pages</div>
    <div class="breadcrumb breadcrumb--blue">></div>
    <div class="breadcrumb breadcrumb--bold">Cars list</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.breadcrumbs {
  display: flex;
  gap: 6px;
  align-items: center;
  width: 186px;
  margin-top: 43px;
  .breadcrumb {
    font-family: "PT Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #818181;

    &--blue {
      color: #243e97;
    }
    &--bold {
      font-weight: bold;
    }
  }
}
</style>