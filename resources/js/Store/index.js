import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
import axios from 'axios'

const store = new Vuex.Store({
    state: {
        count: 0,
        foundCars: 0,
        currentPage: 1,
        cars: null,
        filtersOptions: null,
        dataLoading: false,
        filters: {
            vin: { field: 'vin', operator: "=", value: null, label: 'VIN' },
            marka: { field: 'marka', operator: "=", value: null, label: 'Make' },
            model: { field: 'model', operator: "=", value: null, label: 'Model' },
            yearFrom: { field: 'yearFrom', operator: "=", value: null, label: 'Year from' },
            yearTo: { field: 'yearTo', operator: "=", value: null, label: 'Year to' },
            selling_branch: { field: 'selling_branch', operator: "=", value: null, label: 'Selling branch' },
            runMin: { field: 'runMin', operator: "=", value: null, label: 'Run min' },
            runMax: { field: 'runMax', operator: "=", value: null, label: 'Run Max' },
            search: { field: 'search', operator: "=", value: null, label: 'Search' },
        }
    },
    getters: {
        filledFilters: state => {
            let filledFilters = [];
            for (const property in state.filters) {
                if (state.filters[property].value !== null) {
                    filledFilters.push(state.filters[property])
                }
            }
            return filledFilters;
        }
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        GET_CARS(state) {
            state.dataLoading = true;
            let filtersString = "";
            for (const property in state.filters) {
                if (state.filters[property].value) {
                    filtersString += `${state.filters[property].field}${state.filters[property].operator}${state.filters[property].value}&`
                }
            }
            filtersString += `page=${state.currentPage}`
            console.log(`http://54.36.172.231/api/cars?${filtersString}`)
            axios.get(`http://54.36.172.231/api/cars?${filtersString}`).then(res => {
                state.cars = res.data.data
                state.foundCars = res.data.count
                state.dataLoading = false;

            }).catch(err => {
                state.dataLoading = false;
                console.log(err)
            })
        },
        GET_FILTERS(state) {
            axios.get(`http://54.36.172.231/api/filters`).then(res => {
                state.filtersOptions = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        SET_FILTER(state, filter) {
            state.filters[filter.key].value = filter.value
            this.commit('GET_CARS')
        }
    },
    actions: {}
})

export default store;