import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
import axios from 'axios'

const store = new Vuex.Store({
    state: {
        count: 0,
        cars: null,
        filtersOptions: null,
        filters: {
            vin: null,
        }
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        GET_CARS(state) {
            let filtersString = "";
            for (const property in state.filters) {
                if (state.filters[property]) {
                    filtersString += `${property}=${state.filters[property]}`
                }
            }
            axios.get(`http://54.36.172.231/api/cars?${filtersString}`).then(res => {
                state.cars = res.data
            }).catch(err => {
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
            state.filters[filter.key] = filter.value
            this.commit('GET_CARS')
        }
    },
    actions: {}
})

export default store;