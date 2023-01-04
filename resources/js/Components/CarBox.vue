<template>
    <div class="car__box">
        <vueper-slides :touchable="true" :bullets="false" :fixedHeight="'217px'" :arrows-outside="true">
            <vueper-slide v-for="(image, i) in images" :key="i" :image="image">
            </vueper-slide>
        </vueper-slides>
        <div class="car__box__content">
            <div class="flex">
                <h2>{{ carData.production_year }} {{ toCapital(carData.marka) }} {{ toCapital(carData.model) }}</h2>
                <div class="badge">
                    {{ carData.selling_branch }}
                </div>
            </div>
            <p><span>VIN:</span> {{ carData.vin }}</p>
            <p><span>Location:</span> no data</p>
            <div class="flex flex--line">
                <h3>{{ carData.final_bid }} $</h3>
                <router-link :to="'/car/' + carData.id">More details <img src="img/arrow.svg" alt=""></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: { VueperSlides, VueperSlide },
    props: ['carData'],
    data() {
        return {
            images: ["img/base-img.png", "img/base-img-2.png", "img/base-img-3.png"],
        }
    },
    methods: {
        toCapital(str) {
            let str2 = str.toLowerCase();
            return str2[0].toUpperCase() + str2.substring(1);
        }
    },
}
</script>

<style lang="scss">
.badge {
    background: #1882FF;
    border-radius: 3px;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    padding: 4px;
    color: white;
    text-align: center;
    height: fit-content;

    &--outline {
        background: white;
        color: #1882FF;
        border: 1px solid #597BD5;
    }

    &--gray {
        background: white;
        color: #818181;
        border: 1px solid #818181;
    }
}

.car__box {
    background: #FFFFFF;
    box-shadow: 0px 9px 39px #ECF3F8;
    gap: 24px;
    max-width: 425px;
    @media(min-width:1200px){
        min-width:417px;
    }
    .vueperslides__arrow {

        &--prev,
        &--next {
            width: 50px !important;
            height: 100% !important;
            background: rgba(0, 0, 0, .4);

            svg {
                width: 2.9rem !important;

                path {
                    stroke: white !important;
                }
            }
        }

        &--prev {
            left: 0rem !important;
        }

        &--next {
            right: 0rem !important;
        }
    }

    &__img {
        width: 100%;
    }

    &__content {
        padding: 20px;

        p {
            font-size: 16px;
            line-height: 21px;
            text-align: left;
            margin: 0;

            span {
                color: #818181;
            }
        }

        .flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &--line{
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                margin-top:12px;
            }
            h2 {
                font-weight: 700;
                font-size: 20px;
                line-height: 26px;
            }

            h3 {
                font-weight: 700;
                font-size: 27px;
                line-height: 35px;
                margin:10px 0;
            }

            a {
                font-size: 16px;
                line-height: 21px;
                color: #243E97;
                display: flex;
                gap: 6px;
                align-items: center;
                text-decoration: none;
            }

        }
    }
}
</style>