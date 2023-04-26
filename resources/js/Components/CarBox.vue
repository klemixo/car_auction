<template>
  <div class="car__box" :class="{ searched: searched, small: small }">
    <vueper-slides
      :touchable="true"
      :bullets="false"
      :fixedHeight="'217px'"
      :arrows-outside="true"
    >
      <vueper-slide v-for="(image, i) in images" :key="i" :image="image">
      </vueper-slide>
    </vueper-slides>
    <div class="car__box__content">
      <template v-if="!searched">
        <div class="flex">
          <router-link class="black" :to="'/car/' + carData.id">
            <h2>
              {{ carData.production_year }} {{ toCapital(carData.marka) }}
              {{ toCapital(carData.model) }}
            </h2>
          </router-link>
          <div class="badge">
            {{ carData.selling_branch }}
          </div>
        </div>
        <p><span>VIN:</span> {{ carData.vin }}</p>
        <p><span>Location:</span> no data</p>
        <div class="flex flex--line">
          <h3>{{ carData.final_bid }} $</h3>
          <router-link class="black" :to="'/car/' + carData.id"
            >More details <img src="img/arrow.svg" alt=""
          /></router-link>
        </div>
      </template>
      <template v-else>
        <div class="searched-data">
          <div class="searched-data-left">
            <div class="flex-searched">
              <div class="badge">
                {{ carData.selling_branch }}
              </div>
              <router-link class="black" :to="'/car/' + carData.id">
                <h2>
                  {{ carData.production_year }} {{ toCapital(carData.marka) }}
                  {{ toCapital(carData.model) }}
                </h2>
              </router-link>
              <p><span>VIN:</span> {{ carData.vin }}</p>
            </div>
            <div class="flex-searched-bottom">
              <div>
                <span>Lot number:</span>
                <span class="bold">No data</span>
              </div>
              <div>
                <span>Location:</span>
                <span class="bold">No data</span>
              </div>
              <div>
                <span>Mileage:</span>
                <span class="bold">{{ carData.odometer }}</span>
              </div>
            </div>
          </div>
          <div class="searched-data-right">
            <div class="flex-searched-right">
              <p class="date">{{ carData.createdate }}</p>
              <span>Final bid</span>
              <p class="final-bid">{{ carData.final_bid }} $</p>
              <router-link :to="'/car/' + carData.id"
                >MORE DETAILS
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  props: ["carData", "searched", "small"],
  data() {
    return {
      images: ["img/base-img.png", "img/base-img-2.png", "img/base-img-3.png"],
    };
  },
  methods: {
    toCapital(str) {
      let str2 = str.toLowerCase();
      return str2[0].toUpperCase() + str2.substring(1);
    },
  },
};
</script>

<style lang="scss">
.badge {
  background: #1882ff;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  padding: 4px;
  color: white;
  text-align: center;
  height: fit-content;

  &--outline {
    background: white;
    color: #1882ff;
    border: 1px solid #597bd5;
  }

  &--gray {
    background: white;
    color: #818181;
    border: 1px solid #818181;
  }
}

.car__box {
  background: #ffffff;
  box-shadow: 0px 9px 39px #ecf3f8;
  gap: 24px;
  max-width: 425px;
  @media (min-width: 1200px) {
    min-width: 417px;
  }
  &.small {
    width: 295px;
    min-width: unset;
  }
  .vueperslides__arrow {
    &--prev,
    &--next {
      width: 50px !important;
      height: 100% !important;
      background: rgba(0, 0, 0, 0.4);

      svg {
        width: 2.9rem !important;

        path {
          stroke: white !important;
        }
      }
    }

    &--prev {
      left: 0rem !important;
    }

    &--next {
      right: 0rem !important;
    }
  }

  &__img {
    width: 100%;
  }

  &__content {
    padding: 20px;

    p {
      font-size: 16px;
      line-height: 21px;
      text-align: left;
      margin: 0;

      span {
        color: #818181;
      }
    }

    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &--line {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: 12px;
      }
      a {
        &.black {
          color: black;
          text-decoration: none;
        }
      }
      h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
      }

      h3 {
        font-weight: 700;
        font-size: 27px;
        line-height: 35px;
        margin: 10px 0;
      }

      a {
        font-size: 16px;
        line-height: 21px;
        color: #243e97;
        display: flex;
        gap: 6px;
        align-items: center;
        text-decoration: none;
      }
    }
  }
  a {
    &.black {
      color: black;
      text-decoration: none;
    }
  }
  .searched-data {
    gap: 35px;
  }
  .flex-searched {
    display: flex;
    flex-direction: column;
    .badge {
      width: fit-content;
      margin-bottom: 20px;
    }
    h2 {
      margin: 0;
      margin-bottom: 6px;
      font-size: 25px;
    }
  }
  .flex-searched-right {
    background: #ecf1f9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 12px;
    gap: 4px;
    flex-direction: column;
    height: 100%;
    .date {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      margin-bottom: 24px;
      color: #000000;
    }
    span {
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      color: #818181;
    }
    .final-bid {
      font-weight: 700;
      font-size: 27px;
      line-height: 35px;
      color: #000000;
    }
    a {
      background: #243e97;
      border-radius: 5px;
      font-size: 17px;
      line-height: 44px;
      margin-top: 16px;
      /* identical to box height */

      text-align: center;
      letter-spacing: 0.1em;

      color: #ffffff;
      text-decoration: none;
      width: 176px;
      height: 44px;
    }
  }
  .searched-data {
    display: flex;
    flex-direction: column;
    @media (min-width: 576px) {
      flex-direction: row;
    }
  }
  .flex-searched-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 16px;
    padding-top: 16px;
    gap: 12px;
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span {
        color: #818181;
        &.bold {
          color: black;
        }
      }
    }
  }
  &.searched {
    display: flex;
    max-width: unset;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    .vueperslides {
      width: 320px;
      height: 100%;
      min-width: 320px;
    }
    .car__box__content {
      width: 90%;
    }
  }
}
</style>