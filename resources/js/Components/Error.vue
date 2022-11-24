<template>
    <div class="error-box">
        <img src="img/error.svg" alt="">
        <h2>Oh no!</h2>
        <p>Unfortunately, there are no cars with such filters.</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.error-box{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        font-weight: 700;
        font-size: 45px;
        line-height: 30px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #DF0E0E;
    }
    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
    }
}
</style>