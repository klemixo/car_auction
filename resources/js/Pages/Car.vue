<template>
  <div class="car__container container" v-if="carData">
    <FiltersTop />
    <Claim :id="carData.id" v-if="showModal" @close="showModal = !showModal" />
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
            <div class="badge" :class="{ red: carData.site == 'IAAI' }">
              {{ carData.site }}
            </div>
          </div>
          <div class="flex">
            <h2><span>Lot number:</span> {{ carData.stock }}</h2>
            <h2><span>VIN: </span> {{ carData.vin }}</h2>
          </div>
        </div>
        <button @click="showModal = !showModal">CLAIM LOT</button>
      </div>
    </div>
    <div class="car__container__content">
      <div class="car__container__content__images">
        <div class="main">
          <button @click="currentImage--" :disabled="currentImage === 0">
            <svg viewBox="0 0 9 18">
              <path stroke-linecap="round" d="m1 1 l7 8 -7 8"></path>
            </svg>
          </button>
          <img :src="slides[currentImage]" alt="" />
          <button
            class="next"
            @click="currentImage++"
            :disabled="currentImage === slides.length - 1"
          >
            <svg viewBox="0 0 9 18">
              <path stroke-linecap="round" d="m1 1 l7 8 -7 8"></path>
            </svg>
          </button>
        </div>
        <div class="thumbnails">
          <img
            v-for="(image, idx) in slides"
            :src="image"
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
            <h3>Final bid: ${{ carData.final_bid | formatNumber }}</h3>
            <p class="highlight">
              Seller: <b>{{ carData.seller }}</b>
            </p>
            <div class="flex">
              <p>Auction:</p>
              <div class="badge" :class="{ red: carData.site == 'IAAI' }">
                {{ carData.site }}
              </div>
              <div class="badge badge--outline">
                {{ carData.sold ? "Sold" : "Not sold" }}
              </div>
            </div>
            <div class="flex-base">
              <p class="light">Lot number</p>
              <p class="strong">{{ carData.stock }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Date of sell</p>
              <p class="strong">{{ carData.createdate }}</p>
            </div>
            <div class="flex-base flex-base--no-border">
              <p class="light">Documents</p>
              <p class="strong">{{ carData.documents }}</p>
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
              <div class="strong">
                <div class="badge badge--outline">{{ odometer.badge }}</div>
                {{ odometer.value }}
              </div>
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
              <p class="light">Body color</p>
              <p class="strong">{{ carData.body }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Drive</p>
              <p class="strong">{{ carData.drive_line_type }}</p>
            </div>
            <div class="flex-base flex-base--no-border">
              <p class="light">Fuel</p>
              <p class="strong">{{ carData.fuel }}</p>
            </div>
            <div class="flex-base flex-base--no-border">
              <p class="light">Airbags</p>
              <p class="strong">{{ carData.airbags }}</p>
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
              <p class="light">Estimated Retail value</p>
              <p class="strong">{{ carData.estimated_retail_value }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Estimated repair cost</p>
              <p class="strong">{{ carData.estimated_repair_cost }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Primary damage</p>
              <p class="strong">{{ carData.primary_damage }}</p>
            </div>
            <div class="flex-base">
              <p class="light">Secondary damage</p>
              <p class="strong">{{ carData.secondary_damage }}</p>
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
import Claim from "../Components/Claim.vue";
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
    Claim,
  },
  data() {
    return {
      carData: null,
      cars: null,
      currentImage: 0,
      slides: [],
      showModal: false,
    };
  },
  filters: {
    formatNumber(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  computed: {
    branch() {
      return +this.carData.production_year % 2 === 0;
    },
    mobileView() {
      return window.innerWidth < 768 ? true : false;
    },
    odometer() {
      return {
        value: this.carData.odometer.split(" ")[0],
        badge: this.carData.odometer.split("(")[1].replace(")", ""),
      };
    },
  },
  mounted() {
    this.getCarData();
  },
  methods: {
    changeSlide(idx) {
      this.currentImage = idx;
    },
    closeModal() {
      console.log("OKK");
    },
    getCarData() {
      axios
        .get(`https://vinfax.info/api/cars/${this.id}`)
        .then((res) => {
          this.getCarsData(res.data[0].vin);
          this.carData = res.data[0];
          this.prepareImages();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCarsData(vin) {
      axios
        .get(`https://vinfax.info/api/cars-vin/${vin}`)
        .then((res) => {
          this.cars = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkIfImageExists(url, callback) {
      const img = new Image();
      img.src = url;

      if (img.complete) {
        callback(true);
      } else {
        img.onload = () => {
          callback(true);
        };

        img.onerror = () => {
          callback(false);
        };
      }
    },
    async prepareImages() {
      let count = 0;
      let exists = true;
      while (exists) {
        exists = await new Promise((resolve) => {
          this.checkIfImageExists(
            `https://phttt.vinfax.info/${this.carData.vin}-${this.carData.stock}-${count}.webp`,
            (exists) => {
              if (exists) {
                this.slides.push(
                  `https://phttt.vinfax.info/${this.carData.vin}-${this.carData.stock}-${count}.webp`
                );
              } else {
                if (this.slides.length === 0) {
                  console.log(this.slides);
                  this.slides = [
                    "img/base-img.png",
                    "img/base-img-2.png",
                    "img/base-img-3.png",
                  ];
                  console.log(this.slides);
                }
              }
              count++;
              resolve(exists);
            }
          );
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 43px;
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
  img {
    cursor: pointer;
  }
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
        position: relative;
        button {
          height: 99%;
          width: 50px;
          position: absolute;
          left: 0;
          top: 0;
          display: grid;
          place-content: center;
          cursor: pointer;
          svg {
            width: 0.8rem;
            fill: none;
            stroke: white;
            transform: rotate(-180deg);
          }
          border: none;
          outline: none;
          background: linear-gradient(
            90.88deg,
            #000000 0.72%,
            rgba(0, 0, 0, 0) 99.21%
          );
          &:disabled {
            cursor: not-allowed;
            svg {
              opacity: 0.8;
            }
          }
          &.next {
            right: 0;
            left: unset;
            transform: rotate(-180deg);
            svg {
              transform: rotate(-180deg);
            }
          }
        }
        img {
          width: 100%;
          max-width: 863px;
          @media (min-width: 1200px) {
            height: 579px;
          }
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
            font-size: 24px;
            margin: 0;
          }
        }

        &__content {
          h3 {
            font-weight: 700;
            font-size: 33px;
            line-height: 43px;
            text-align: left;
            margin: 16px 0;
          }

          .highlight {
            background: #ffebb7;
            border-radius: 3px;
            width: fit-content;
            margin: 4px 0;
            padding: 3px 25px;
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
            &--no-border {
              border-bottom: unset;
            }
            p {
              margin: 6px 0;
              font-size: 15px;
            }

            .light {
              color: #818181;
            }

            .strong {
              color: black;
              display: flex;
              align-items: center;
              gap: 6px;
              .badge {
                color: gray;
                border: 1px solid gray;
                margin: 2px 0;
              }
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
    width: calc(100% - 20px);
    .flex-main {
      justify-content: space-between;
      flex-wrap: wrap;

      button {
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
        cursor: pointer !important;
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
