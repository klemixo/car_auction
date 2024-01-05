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
        searched: false,
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
            auctionHouseIAAI: { field: 'site', operator: "=", value: null, label: 'IAAI' },
            auctionHouseCopart: { field: 'site', operator: "=", value: null, label: 'Copart' },
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
        },
        getCarsList: state => {
            if (state.cars) {
                let newCars = [];
                console.log(state.filters)
                state.cars.forEach(car => {
                    if (state.filters.runMax.value) {
                        const mileAge = parseInt(car['odometer'].replace(/\,/g, ''), 10);
                        if (mileAge > state.filters.runMin.value && mileAge < state.filters.runMax.value) {
                            newCars.push(car)
                        }
                    } else {
                        newCars.push(car)
                    }
                    if (state.filters.auctionHouseCopart.value && !state.filters.auctionHouseIAAI.value) {
                        newCars = newCars.filter(car => car.production_year % 2 !== 0)
                    }
                    if (state.filters.auctionHouseIAAI.value && !state.filters.auctionHouseCopart.value) {
                        newCars = newCars.filter(car => car.production_year % 2 === 0)
                    }
                })
                return newCars;
            }

        },
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        GET_CARS(state) {
            state.dataLoading = true;
            let filtersString = "";
            console.log(state.filters)
            for (const property in state.filters) {
                if (state.filters[property].field === "site" && state.filters[property].value === false) {
                    continue;
                }
                if (state.filters[property].field === "site" && state.filters[property].value === true) {
                    filtersString += `${state.filters[property].field}${state.filters[property].operator}${state.filters[property].label}&`
                    continue;
                }
                if (state.filters[property].value) {
                    filtersString += `${state.filters[property].field}${state.filters[property].operator}${state.filters[property].value}&`
                }
            }
            if (filtersString !== "") {
                state.searched = true;
            } else {
                state.searched = false;
            }
            filtersString += `page=${state.currentPage}`
            axios.get(`https://vinfax.info/api/cars?${filtersString}`).then(res => {
                state.cars = res.data.data
                console.log(state.cars,'TUTAJ');
                state.foundCars = res.data.count
                state.dataLoading = false;

            }).catch(err => {
                state.dataLoading = false;
                console.log(err)
            })
        },
        GET_FILTERS(state, newMarka) {
            const reqUrl = newMarka ? `https://vinfax.info/api/filters?newMarka=${newMarka}` : `https://vinfax.info/api/filters`;
            axios.get(reqUrl).then(res => {
                state.filtersOptions = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        SET_FILTER(state, filter) {
            state.filters[filter.key].value = filter.value
            this.commit('GET_CARS')
        },
        REMOVE_ALL_FILTERS(state) {
            for (const key in state.filters) {
                state.filters[key].value = null;
                state.searched = false;
            }
        }
    },
    actions: {}
})

export default store;
