<template>
    <div class="error-box">
        <img src="img/no-cars.svg" alt="">
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
    padding:40px;
    flex-direction: column;
    @media(min-width:768px){
        width:100%;
    }
    h2{
        font-weight: 500;
        font-size: 45px;
        line-height: 30px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #1882FF;
    }
    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
    }
    img{
        width:100%;
        max-width: 500px;
    }
}
</style>