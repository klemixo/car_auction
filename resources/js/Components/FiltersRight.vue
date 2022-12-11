<template>
    <div class="filters__right ">
        <h4>Filters</h4>
            <div class="filters__right__flex">
                <div class="filters__right__filter">
                <input type="text" placeholder="Wyszukaj za pomocą nazwy" class="base-input">
            </div>
            <div class="filters__right__filter">
                <label for="">Year</label>
                <div class="filters__right__filter__flex">
                 <multiselect v-model="filters.yearFrom.value" :options="filters.yearFrom.options" :searchable="false" :close-on-select="false" :show-labels="false" :placeholder="filters.yearFrom.placeholder"></multiselect>
                 <multiselect v-model="filters.yearTo.value" :options="filters.yearTo.options" :searchable="false" :close-on-select="false" :show-labels="false" :placeholder="filters.yearTo.placeholder"></multiselect>
                </div>
            </div>
            <div class="filters__right__filter">
                <label for="">Przebieg(mile)</label>
                <vue-range-slider :min="filters.runMin"  :tooltip-merge="false" width="100%" :max="filters.runMax" ref="slider" v-model="filters.runValueStart"></vue-range-slider>
            </div>
            <div class="filters__right__filter">
                <label for="">Dom aukcyjny</label>
                <div class="base-checkbox" v-for="(house,index) in filters.auctionHouses.options" :key="index">
                <input :value="house" v-model="filters.auctionHouses.value" class="inp-cbx" :id="house" type="checkbox" />
                <label class="cbx" :for="house"><span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg></span><span>{{ house }}</span>
                </label>
                </div>
                <div class="base-checkbox others-checkboxes" >
                <input v-model="filters.closedAuctions" class="inp-cbx" id="closed-auctions" type="checkbox" />
                <label class="cbx" for="closed-auctions"><span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg></span><span>Ukryj zakończone aukcje</span>
                </label>
                </div>
                <div class="base-checkbox" >
                <input v-model="filters.fastPurchase" class="inp-cbx" id="fast-purchase" type="checkbox" />
                <label class="cbx" for="fast-purchase"><span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg></span><span>Szybki zakup</span>
                </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'
    export default {
        components:{
            VueRangeSlider
        },
        data() {
            return {
                filters:{
                    search:'',
                    yearFrom:{
                        options:[],
                        value:'',
                        placeholder:'From',
                    },
                    yearTo:{
                        options:[],
                        value:'',
                        placeholder:'To',
                    },
                    auctionHouses:{
                        options:['IAAI','Copart','Test'],
                        value:[],
                    },
                    closedAuctions:false,
                    fastPurchase:false,
                    runMin:0,
                    runMax:250000,
                    runValueStart:1,
                    runValueEnd:0,
                }, 
            }
        },
 
    }
</script>

<style lang="scss" scoped>
.filters__right{
    h4{
        text-align: left;
        font-weight: 700;
        font-size: 25px;
        line-height: 32px;
    }
    background: #F8F8F8;;
    box-shadow: 0px 9px 39px #ECF3F8;
    padding:20px 10px;
    width:100%;
    height: fit-content;
    @media(min-width:992px){
        padding: 17px 15px;
        flex-direction: row;
        width:310px;
    }
    &__flex{
        display:flex;
        flex-direction: column;
        gap:24px;
        width:100%;
    }
    &__filter{
        display:flex;
        flex-direction: column;
        gap:8px;
        align-items: flex-start;
        flex:1;
        justify-content: flex-end;
        &__flex{
            display:flex;
            width:100%;
            .multiselect{
                flex:1;
            }
        }
        .others-checkboxes{
            margin-top:55px;
        }
        .base-input{
            width:fit-content;
            background: white;
        }
        label{
            font-weight: 700;
            font-size: 18px;
            line-height: 23px;
            color: #000000;
        }
    }
}
</style>