<template>
  <div class="car__container container" v-if="carData">
    <FiltersTop />
    <div class="breadcrumbs">
      <div class="breadcrumb">Search</div>
      <div class="breadcrumb breadcrumb--blue">></div>
      <div class="breadcrumb">Cars</div>
      <div class="breadcrumb breadcrumb--blue">></div>
      <div class="breadcrumb">{{ carData.marka }}</div>
      <div class="breadcrumb breadcrumb--blue">></div>
      <div class="breadcrumb">{{ carData.model }}</div>
      <div class="breadcrumb breadcrumb--blue">></div>
      <div class="breadcrumb">{{ carData.model }}</div>
      <div class="breadcrumb breadcrumb--blue">></div>
      <div class="breadcrumb breadcrumb--bold">
        <span>{{ carData.production_year }}</span
        ><span>{{ carData.marka }}</span
        ><span>{{ carData.model }}</span>
      </div>
    </div>
    <div class="car__container__heading card">
      <div class="flex flex-main">
        <div>
          <div class="flex">
            <h1>
              <span v-if="carData.production_year">{{
                carData.production_year
              }}</span>
              {{ carData.marka }}
              {{ carData.model }}
            </h1>
            <div class="badge" :class="{ red: branch }">
              {{ branch ? "IAAI" : "Coopart" }}
            </div>
          </div>
          <div class="flex">
            <h2><span>Lot number:</span> {{ carData.run_number }}</h2>
            <h2><span>VIN: </span> {{ carData.vin }}</h2>
          </div>
        </div>
        <router-link :to="{ name: 'Claim', props: { id: carData.id } }">
          CLAIM LOT
        </router-link>
      </div>
    </div>
    <div class="car__container__content">
      <div class="car__container__content__images">
        <div class="main">
          <img :src="'https://vinfax.info/' + slides[currentImage]" alt="" />
        </div>
        <div class="thumbnails">
          <img
            v-for="(image, idx) in slides"
            :src="'https://vinfax.info/' + image"
            alt=""
            @click="changeSlide(idx)"
          />
        </div>
      </div>
      <div class="car__container__content__data">
        <div class="data__box card">
          <div class="data__box__heading">
            <img src="/img/Sale-details.svg" alt="" />
            <p>Sale Details</p>
          </div>
          <div class="data__box__content">
            <h3>Final bid: $13.456.00</h3>
            <p class="highlight">Seller: <b>Non-Insurence Company</b></p>
            <div class="flex">
              <p>Auction:</p>
              <div class="badge" :class="{ red: branch }">
                {{ branch ? "IAAI" : "Coopart" }}
              </div>
              <div class="badge badge--outline">Not Sold</div>
            </div>
            <div class="flex-base">
              <p class="light">Lot number</p>
              <p class="strong">{{ carData.run_number }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Date of sell</p>
              <p class="strong">{{ carData.sold_date }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Documents</p>
              <p class="strong">{{ carData.sold_date }}</p>
            </div>
          </div>
        </div>
        <div class="data__box card">
          <div class="data__box__heading">
            <img src="/img/Vehicle-details.svg" alt="" />
            <p>Vehicle Details</p>
          </div>
          <div class="data__box__content">
            <div class="flex-base">
              <p class="light">VIN</p>
              <p class="strong">{{ carData.vin }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Year</p>
              <p v-if="carData.production_year" class="strong">
                {{ carData.production_year }}
              </p>
            </div>
            <div class="flex-base">
              <p class="light">Mileage</p>
              <p class="strong">{{ carData.odometer }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Engine</p>
              <p class="strong">{{ carData.engine }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Transmission</p>
              <p class="strong">{{ carData.transmission }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Run and drive</p>
              <p class="strong">{{ carData.drive_line_type }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Body color</p>
              <p class="strong">{{ carData.odometer }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Drive</p>
              <p class="strong">{{ carData.drive_line_type }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Fuel</p>
              <p class="strong">{{ carData.odometer }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Keys</p>
              <p class="strong">{{ carData.key }}</p>
            </div>
          </div>
        </div>
        <div class="data__box card">
          <div class="data__box__heading">
            <img src="/img/Condition-details.svg" alt="" />
            <p>Condition Details</p>
          </div>
          <div class="data__box__content">
            <div class="flex-base">
              <p class="light">Primary damage</p>
              <p class="strong">{{ carData.loss }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Secondary damage</p>
              <p class="strong">{{ carData.primary_damage }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Estimated Retail value</p>
              <p class="strong">{{ carData.odometer }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Estimated repair cost</p>
              <p class="strong">{{ carData.engine }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sales__history">
      <SalesHistory :cars="cars" />
    </div>
    <div class="similiar__lots">
      <SimiliarLots />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CarSlider from "../Components/CarSlider.vue";
import SimiliarLots from "../Components/SimiliarLots.vue";
import SalesHistory from "../Components/SalesHistory.vue";
import FiltersTop from "../Components/FiltersTop.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  props: ["id"],
  components: {
    CarSlider,
    VueperSlides,
    VueperSlide,
    FiltersTop,
    SalesHistory,
    SimiliarLots,
  },
  data() {
    return {
      carData: null,
      cars: null,
      currentImage: 0,
    };
  },
  computed: {
    slides() {
      return [
        "img/base-img.png",
        "img/base-img-2.png",
        "img/base-img-3.png",
        "img/base-img-3.png",
        "img/base-img-3.png",
        "img/base-img-3.png",
      ];
    },
    branch() {
      return +this.carData.production_year % 2 === 0;
    },
    mobileView() {
      return window.innerWidth < 768 ? true : false;
    },
  },
  mounted() {
    this.getCarData();
  },
  methods: {
    changeSlide(idx) {
      this.currentImage = idx;
    },
    getCarData() {
      axios
        .get(`https://vinfax.info/api/cars/${this.id}`)
        .then((res) => {
          this.cars = res.data;
          this.carData = res.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 83px;
  flex-wrap: wrap;
  width: 100%;
  .breadcrumb {
    font-family: "PT Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    gap: 4px;
    color: #818181;

    &--blue {
      color: #243e97;
    }
    &--bold {
      font-weight: bold;
    }
  }
}
.thumbnails {
  margin: auto;
  max-width: 100%;
  margin-top: 12px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
  width: 158px !important;
  height: 108px !important;
}
.vueperslides__arrow {
  &--prev {
    left: -3rem !important;
  }
  &--next {
    right: -3rem !important;
  }
}
.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}
.car__container {
  &__heading {
    width: 100%;
    margin: 20px 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 29px;

    @media (min-width: 992px) {
      flex-direction: row;
    }

    &__images {
      flex: 1;
      .main {
        img {
          width: 100%;
          max-width: 863px;
          height: 579px;
        }
      }
      .thumbnails {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        img {
          width: 156px;
          height: 106px;
        }
      }
      @media (min-width: 992px) {
        flex: 3;
      }
    }

    &__data {
      flex: 1;
      width: 100%;

      @media (min-width: 992px) {
        width: unset;
        min-width: 410px;
      }

      display: flex;
      flex-direction: column;
      gap: 21px;

      .data__box {
        &__heading {
          background: #f8f8f8;
          display: flex;
          gap: 16px;
          justify-content: flex-start;
          align-items: center;

          img {
            width: 27px;
            height: 27px;
          }

          p {
            font-weight: 700;
            font-size: 25px;
            margin: 0;
          }
        }

        &__content {
          h3 {
            font-weight: 700;
            font-size: 33px;
            line-height: 43px;
            text-align: left;
          }

          .highlight {
            background: #ffebb7;
            border-radius: 3px;
            width: fit-content;
          }

          .flex {
            display: flex;
            gap: 11px;
            justify-content: flex-start;
            align-items: center;
          }

          .flex-base {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
            p {
              margin: 10px 0;
            }

            .light {
              color: #818181;
            }

            .strong {
              color: black;
            }
          }
        }
      }
    }
  }

  .card {
    background: #ffffff;
    border: 1px solid #ecf1f9;
    padding: 10px;
    border-radius: 8px;

    .flex-main {
      justify-content: space-between;
      flex-wrap: wrap;

      a {
        background: #ffcd1e;
        border-radius: 5px;
        color: white;
        width: fit-content;
        height: fit-content;
        border: none;
        outline: none;
        margin: auto 0;
        padding: 5px;
        text-decoration: none;
      }
    }

    h1 {
      font-size: 25px;
      line-height: 32px;
      color: #000000;
      margin-right: 24px;
    }

    h2 {
      &:first-of-type {
        margin-right: 65px;
      }

      font-size: 16px;
      line-height: 21px;

      span {
        color: #818181;
      }
    }
  }
}
</style>