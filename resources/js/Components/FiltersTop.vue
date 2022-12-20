<template>
    <div class="filters__top container">
        <div class="filters__top__filter" v-for="(filter,key) in filters" :key="key">
            <label for="">{{ filter.label }}</label>
            <multiselect :id="key" @select="setFilter" @remove="removeFilter"  v-model="filter.value" :options="key === 'yearFrom' || key === 'yearTo' ? filtersOptions['production_year'] : filtersOptions[key]" :track-by="key === 'yearFrom' || key === 'yearTo' ? 'production_year' : key" :label="key === 'yearFrom' || key === 'yearTo' ? 'production_year' : key" :searchable="true" :close-on-select="true" :show-labels="false" :placeholder="filter.placeholder"></multiselect>
        </div>
        <button @click="search" class="base-btn">SEARCH HERE</button>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../Store';

    export default {
        data() {
            return {
                filters:{
                    marka:{
                        value:'',
                        label:'Select mark',
                        placeholder:'All marks',
                    },
                    model:{
                        value:'',
                        label:'Select model',
                        placeholder:'All models',
                    },
                    yearFrom:{
                        value:'',
                        label:'Year',
                        placeholder:'From',
                    },
                    yearTo:{
                        value:'',
                        label:'',
                        placeholder:'To',
                    },
                }, 
            }
        },
        computed: {
            ...mapState({
            filtersOptions: state => state.filtersOptions
            }),
        },
        mounted() {
            store.commit('GET_FILTERS');
        },
        methods: {
            search(){
                console.log("ok")
            },
            setFilter(filter,id){
                console.log(id)
                const filterObj = {key : id !== 'yearTo' && id !== 'yearFrom' ? Object.keys(filter)[0] : id, value : Object.values(filter)[0]}
                store.commit('SET_FILTER',filterObj)
            },
            removeFilter(filter,id){
                const filterObj = {key : id !== 'yearTo' && id !== 'yearFrom' ? Object.keys(filter)[0] : id, value : null}
                store.commit('SET_FILTER',filterObj)
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