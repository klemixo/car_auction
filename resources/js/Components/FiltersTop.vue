<template>
    <div class="filters__top container" v-if="filters">
        <div
            class="filters__top__filter"
            v-for="(filter, key) in filters"
            :key="key"
        >
            <label for="">{{ filter.label }}</label>
            <multiselect
                :id="key"
                @select="setFilter"
                @remove="removeFilter"
                v-model="filter.value"
                :options="
                    key === 'yearFrom' || key === 'yearTo'
                        ? filtersOptions['production_year']
                        : filtersOptions[key]
                "
                :track-by="
                    key === 'yearFrom' || key === 'yearTo'
                        ? 'production_year'
                        : key
                "
                :label="
                    key === 'yearFrom' || key === 'yearTo'
                        ? 'production_year'
                        : key
                "
                :searchable="true"
                :close-on-select="true"
                :show-labels="false"
                :placeholder="filter.placeholder"
            ></multiselect>
        </div>
        <router-link :to="{ name: 'home' }" class="base-btn base-btn--filters"
            >SEARCH HERE</router-link
        >
    </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../Store";

export default {
    data() {
        return {
            filters: {
                marka: {
                    value: "",
                    label: "Select Make",
                    placeholder: "All makes"
                },
                model: {
                    value: "",
                    label: "Select Model",
                    placeholder: "All models"
                },
                yearFrom: {
                    value: "",
                    label: "Year",
                    placeholder: "From"
                },
                yearTo: {
                    value: "",
                    label: "",
                    placeholder: "To"
                }
            }
        };
    },
    computed: {
        ...mapState({
            filtersOptions: state => state.filtersOptions
        })
    },
    mounted() {
        store.commit("GET_FILTERS", false);
    },
    methods: {
        search() {},
        setFilter(filter, id) {
            if (id === "marka") {
                store.commit("GET_FILTERS", Object.values(filter)[0]);
            }
            const filterObj = {
                key:
                    id !== "yearTo" && id !== "yearFrom"
                        ? Object.keys(filter)[0]
                        : id,
                value: Object.values(filter)[0]
            };
            store.commit("SET_FILTER", filterObj);
        },
        removeFilter(filter, id) {
            if (id === "marka") {
                store.commit("GET_FILTERS", false);
            }
            const filterObj = {
                key:
                    id !== "yearTo" && id !== "yearFrom"
                        ? Object.keys(filter)[0]
                        : id,
                value: null
            };
            store.commit("SET_FILTER", filterObj);
        }
    }
};
</script>

<style lang="scss" scoped>
.filters__top {
    margin-top: 32px;
    background: #ffffff;
    box-shadow: 0px 9px 39px #ecf3f8;
    border-bottom: 4px solid #243e97;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (min-width: 768px) {
        margin-top: 80px;
        padding: 40px 34px;
        flex-direction: row;
        width: 100% !important;
        max-width: 1222px !important;
    }
    button {
        padding: 10px;
        margin-top: auto;
        height: 65px;
    }
    &__filter {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
        flex: 1;
        justify-content: flex-end;
        label {
            font-weight: 700;
            font-size: 18px;
            line-height: 23px;
            color: #000000;
        }
    }
}
</style>
