import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
import axios from 'axios'

const store = new Vuex.Store({
    state: {
        count: 0,
        cars: null,
        filtersOptions: null,
        dataLoading: false,
        filters: {
            vin: { field: 'vin', operator: "=", value: null },
            marka: { field: 'marka', operator: "=", value: null },
            model: { field: 'model', operator: "=", value: null },
            yearFrom: { field: 'yearFrom', operator: "=", value: null },
            yearTo: { field: 'yearTo', operator: "=", value: null },
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
            console.log(`http://54.36.172.231/api/cars?${filtersString}`)
            axios.get(`http://54.36.172.231/api/cars?${filtersString}`).then(res => {
                state.cars = res.data
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