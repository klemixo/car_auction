<template>
    <div class="car__box">
        <vueper-slides :touchable="true" :bullets="false" :fixedHeight="'217px'" :arrows-outside="true">
        <vueper-slide v-for="(image, i) in images" :key="i" :image="image">
        </vueper-slide>
        </vueper-slides>
        <div class="car__box__content">
            <div class="flex">
                <h2>{{ carData.production_year }} {{ carData.marka }} {{ carData.model }}</h2>
                <div class="badge">
                    {{ carData.selling_branch }}
                </div>
            </div>
            <p><span>VIN:</span> {{ carData.vin }}</p>
            <p><span>Location:</span> no data</p>
            <div class="flex">
                <h3>{{ carData.final_bid }} $</h3>
                <router-link to="">More details <img src="img/arrow.svg" alt=""></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
    export default {
        components: { VueperSlides, VueperSlide },
        props:['carData'],
        data() {
            return {
        images:["img/base-img.png","img/base-img-2.png","img/base-img-3.png"],
            }
        },
    }
</script>

<style lang="scss" scoped>
.car__box{
    background: #FFFFFF;
box-shadow: 0px 9px 39px #ECF3F8;
gap:24px;
max-width: 425px;

&__img{
width:100%;
}
&__content{
padding:20px;
        p{
            font-size: 16px;
            line-height: 21px;
            text-align: left;
            margin:0;
            span{
                color: #818181;
            }
        }
    .flex{
        display:flex;
        justify-content: space-between;
        align-items: center;
        h2{
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
        }
        h3{
            font-weight: 700;
            font-size: 27px;
            line-height: 35px;
        }
        .badge{
            background: #1882FF;
            border-radius: 3px;
            font-weight: 700;
            font-size: 16px;
            line-height: 21px;
            padding:4px;
            color:white;
            text-align: center;
        }
        a{
            font-size: 16px;
            line-height: 21px;
            color: #243E97;
            display:flex;
            gap:6px;
            align-items: center;
            text-decoration: none;
        }

    }
}
}

</style>