<template>
    <div class="filters__top container">
        <div class="filters__top__filter" v-for="(filter,index) in filters" :key="index">
            <label for="">{{ filter.label }}</label>
            <multiselect v-model="filter.value" :options="filter.options" :searchable="false" :close-on-select="false" :show-labels="false" :placeholder="filter.placeholder"></multiselect>
        </div>
        <button @click="search" class="base-btn">SEARCH HERE</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                filters:{
                    mark:{
                        options:[],
                        value:'',
                        label:'Select mark',
                        placeholder:'All marks',
                    },
                    model:{
                        options:[],
                        value:'',
                        label:'Select model',
                        placeholder:'All models',
                    },
                    yearFrom:{
                        options:[],
                        value:'',
                        label:'Year',
                        placeholder:'From',
                    },
                    yearTo:{
                        options:[],
                        value:'',
                        label:'',
                        placeholder:'To',
                    },
                }, 
            }
        },
        methods: {
            search(){
                console.log("ok")
            }
        },
 
    }
</script>

<style lang="scss" scoped>
.filters__top{
    margin-top: 32px;
    background: #FFFFFF;
    box-shadow: 0px 9px 39px #ECF3F8;
    border-bottom: 4px solid #243E97;
    padding:20px 10px;
    display:flex;
    flex-direction: column;
    gap:24px;
    @media(min-width:768px){
    margin-top: 68px;
    padding: 90px 34px;
    flex-direction: row;
    }
    &__filter{
        display:flex;
        flex-direction: column;
        gap:8px;
        align-items: flex-start;
        flex:1;
        justify-content: flex-end;
        label{
            font-weight: 700;
            font-size: 18px;
            line-height: 23px;
            color: #000000;
        }
    }
}
</style>