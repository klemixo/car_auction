<template>
  <div class="filters__right">
    <h4>Filters</h4>
    <div class="filters__right__flex">
      <div class="filters__right__filter">
        <input
          v-model="search"
          @keyup="nameSearch"
          type="text"
          placeholder="Search by name"
          class="base-input"
        />
      </div>
      <label class="year-label" for="">Year</label>
      <div class="filters-flex">
        <div
          class="filters__right__filter"
          v-for="(filter, key) in filtersYear"
          :key="key"
        >
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
              key === 'yearFrom' || key === 'yearTo' ? 'production_year' : key
            "
            :label="
              key === 'yearFrom' || key === 'yearTo' ? 'production_year' : key
            "
            :searchable="true"
            :close-on-select="true"
            :show-labels="false"
            :placeholder="filter.placeholder"
          ></multiselect>
        </div>
      </div>

      <div class="filters__right__filter">
        <label for="">Odometer(miles)</label>
        <MultiRangeSlider
          :min="filters.runMin"
          :max="filters.runMax"
          :step="500"
          :ruler="false"
          :label="false"
          :minValue="filters.runValueStart"
          :maxValue="filters.runValueEnd"
          @input="UpdateValues"
        />
        <div class="filters-flex">
          <input
            type="number"
            v-model.number="filters.runValueStartTmp"
            min="0"
            :max="filters.runValueEndTmp"
            @keyup="updateRunValue"
            class="base-input"
          />
          <span>-</span>
          <input
            type="number"
            v-model.number="filters.runValueEndTmp"
            :min="filters.runValueStartTmp"
            max="9999999"
            @keyup="updateRunValue"
            class="base-input"
          />
        </div>
      </div>
      <div class="filters__right__filter">
        <label for="">Auction</label>
        <div class="base-checkbox others-checkboxes">
          <input
            v-model="filters.auctionHouseIAAI"
            class="inp-cbx"
            id="closed-auctions"
            type="checkbox"
            value="iaai"
            @change="setCheckboxFilter('auctionHouseIAAI')"
          />
          <label class="cbx" for="closed-auctions"
            ><span>
              <svg width="12px" height="10px" viewbox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span
            ><span>IAAI</span>
          </label>
        </div>
        <div class="base-checkbox">
          <input
            v-model="filters.auctionHouseCopart"
            class="inp-cbx"
            id="fast-purchase"
            type="checkbox"
            value="copart"
            @change="setCheckboxFilter('auctionHouseCopart')"
          />
          <label class="cbx" for="fast-purchase"
            ><span>
              <svg width="12px" height="10px" viewbox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span
            ><span>Copart</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MultiRangeSlider from "multi-range-slider-vue";
import { mapState } from "vuex";
import store from "../Store";
export default {
  components: {
    MultiRangeSlider,
  },
  data() {
    return {
      filtersYear: {
        yearFrom: {
          value: "",
          label: "Year",
          placeholder: "From",
        },
        yearTo: {
          value: "",
          label: "",
          placeholder: "To",
        },
      },
      filters: {
        search: "",
        auctionHouseIAAI: false,
        auctionHouseCopart: false,
        closedAuctions: false,
        fastPurchase: false,
        runMin: 0,
        runMax: 999999,
        runValueStart: 0,
        runValueEnd: 250000,
        runValueStartTmp: 0,
        runValueEndTmp: 250000,
      },
    };
  },
  computed: {
    ...mapState({
      filtersOptions: (state) => state.filtersOptions,
    }),
  },
  methods: {
    UpdateValues(e) {
      this.filters.runValueStart = e.minValue;
      this.filters.runValueEnd = e.maxValue;
      this.filters.runValueStartTmp = e.minValue;
      this.filters.runValueEndTmp = e.maxValue;
      this.$store.state.filters.runMin.value = e.minValue;
      this.$store.state.filters.runMax.value = e.maxValue;
    },
    updateRunValue() {
      this.filters.runValueStart = this.filters.runValueStartTmp;
      this.filters.runValueEnd = this.filters.runValueEndTmp;
      this.$store.state.filters.runMin.value = this.filters.runValueStart;
      this.$store.state.filters.runMax.value = this.filters.runValueEnd;
    },
    nameSearch() {
      const filterObj = { key: "search", value: this.search };
      store.commit("SET_FILTER", filterObj);
    },
    setCheckboxFilter(field) {
      store.commit("SET_FILTER", { key: field, value: this.filters[field] });
    },
    setFilter(filter, id) {
      const filterObj = {
        key: id !== "yearTo" && id !== "yearFrom" ? Object.keys(filter)[0] : id,
        value: Object.values(filter)[0],
      };
      store.commit("SET_FILTER", filterObj);
    },
    removeFilter(filter, id) {
      const filterObj = {
        key: id !== "yearTo" && id !== "yearFrom" ? Object.keys(filter)[0] : id,
        value: null,
      };
      store.commit("SET_FILTER", filterObj);
    },
  },
};
</script>

<style lang="scss" >
.year-label {
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  text-align: left;
}
.filters__right {
  .base-input {
    padding: 10px;
  }
  h4 {
    margin: 10px 0;
    text-align: left;
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
  }
  background: #f8f8f8;
  box-shadow: 0px 9px 39px #ecf3f8;
  padding: 20px 10px;
  width: 100%;
  height: fit-content;
  @media (min-width: 992px) {
    padding: 17px 15px;
    flex-direction: row;
    width: 310px;
  }
  &__flex {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }
  .filters-flex {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  &__filter {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    flex: 1;
    justify-content: flex-end;
    &__flex {
      display: flex;
      width: 100%;
      .multiselect {
        flex: 1;
      }
    }
    .others-checkboxes {
      margin-top: 10px;
    }
    .base-input {
      width: fit-content;
      background: white;
    }
    label {
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      color: #000000;
    }
  }
}

.multi-range-slider {
  width: 90%;
  box-shadow: none;
  border: none;

  .thumb {
    &::before {
      background: #243e97;
      width: 15px;
      height: 15px;
      box-shadow: none;
      border: none;
    }
  }
}
.bar {
  height: 3px;
  border: none;
  box-shadow: none;
}
.bar-inner {
  background: #243e97 !important;
  border: none !important;
  box-shadow: none !important;
}
.bar-left,
.bar-right {
  padding: 0 !important;
  background-color: #93c5ff !important;
}
</style>
