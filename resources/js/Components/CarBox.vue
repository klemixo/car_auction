<template>
    <div class="car__box">
        <img class="car__box__img" src="img/base-img.png" alt="">
        {{ carData }}
    </div>
</template>

<script>
    export default {
        props:['carData']
    }
</script>

<style lang="scss" scoped>
.car__box{
    background: #FFFFFF;
box-shadow: 0px 9px 39px #ECF3F8;
gap:24px;
padding:20px;
max-width: 425px;
max-height: 425px;
&__img{
width:100%;
}
}

</style>