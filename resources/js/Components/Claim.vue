<template>
  <div v-if="carData" class="modal-wrapper">
    <div class="modal-wrapper__content">
      <div class="card-top card-top--no-padding">
        <div class="heading">
          <h2>CLAIM LOT</h2>
          <button @click="$emit('close')">
            <span>&#10006;</span>
          </button>
        </div>
        <div v-if="!privacy">
          <p>
            We do respect privacy rights of every person. Therefore if you do
            not want to show the lot you have purchased on our website, you can
            hide it.
          </p>
          <h3>PLEASE BE AWARE THAT IT IS PROHIBITED TO:</h3>
          <ul>
            <li>Hide lot if you want to avoid the right tax calculation;</li>
            <li>
              Hide lot for hiding damage and odometer infromation from the
              future buyers;
            </li>
            <li>
              Hide lot for misinformation, misrepresentation, fraud or other
              illegal activity;
            </li>
          </ul>
          <div class="flex">
            <input id="privacy" type="checkbox" v-model="privacy" />
            <label for="privacy"
              >I have read and accept the limitations stated above</label
            >
          </div>
        </div>
      </div>
      <div class="car__container__heading card" v-if="privacy">
        <stripe-checkout
          ref="checkoutRef"
          mode="payment"
          :pk="publishableKey"
          :line-items="lineItems"
          :success-url="successURL"
          :cancel-url="cancelURL"
          @loading="(v) => (loading = v)"
        />
        <div class="flex flex-main">
          <div class="flex">
            <img
              :src="`https://phttt.vinfax.info/${
                carData.vin
              }-${this.carData.stock}-0.webp`"
              alt=""
            />
          </div>
          <div>
            <div class="flex-middle">
              <div class="badge" :class="{ red: carData.site == 'IAAI' }">
                {{ carData.site }}
              </div>
              <h1>
                {{ carData.production_year }} {{ carData.marka }}
                {{ carData.model }}
              </h1>
              <h2>VIN: {{ carData.vin }}</h2>
            </div>
            <div class="flex">
              <h2><span>Lot number:</span> {{ carData.stock }}</h2>
              <h2><span>Location: </span> {{ carData.selling_branch }}</h2>
              <h2><span>Mileage: </span> {{ carData.odometer }}</h2>
            </div>
          </div>
          <div class="flex-last">
            {{ carData.createdate }}
            <h3>Final bid</h3>
            <h5>${{ carData.final_bid | formatNumber }}</h5>
            <button :disabled="!privacy" @click="payNow">CLAIM LOT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  props: ["id"],
  components: {
    StripeCheckout,
  },
  data() {
    return {
      carData: null,
      privacy: false,
      publishableKey:
        "pk_test_51L6Y73EIV3WPLa2S77VyiRjJYhLg60WrlK30R8ZDRn9X5hTnp6V6NGTwyyU7F4Eua9WNtIo4ExYvBRnZjojbG7J100NMpo5Hpb",
      loading: false,
      lineItems: [
        {
          price: "price_1LG2JvEIV3WPLa2ScLQYEIvk", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
    };
  },
    filters: {
    formatNumber(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  computed: {
    branch() {
      return +this.carData.production_year % 2 === 0;
    },
    successURL() {
      let url = `${
        window.location.origin
      }/#/success/${this.carData.vin.trim()}-${this.carData.odometer.trim()}`;
      return url.replaceAll(" ", "");
    },
    cancelURL() {
      return `${window.location.origin}/#/error`;
    },
  },
  mounted() {
    this.getCarData();
  },
  methods: {
    payNow() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    getCarData() {
      axios
        .get(`https://vinfax.info/api/cars/${this.id}`)
        .then((res) => {
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
.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-content: center;
  backdrop-filter: blur(3px);
  z-index: 200;
  &__content {
    background: white;
    border-radius: 6px;
    padding: 20px;
  }
}
.car__container {
  &__heading {
    width: 99%;
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
        padding: 20px !important;

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
            font-weight: 500;
            font-size: 25px;
            margin: 0;
          }
        }

        &__content {
          h3 {
            font-weight: 500;
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

    .badge {
      width: fit-content;
      background: #1882ff;
      border-radius: 3px;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      color: #ffffff;
      padding: 4px 5px;
      margin-bottom: 20pxgfhngh;
    }

    .flex-middle {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .flex-last {
      padding: 30px;
      background: #ecf1f9;
      width: unset;
      h5 {
        font-size: 1.4rem;
        margin: 6px 0;
      }
    }

    .flex-main {
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      align-items: center;

      img {
        width: 320px;
      }

      button {
        background: #ffcd1e;
        border-radius: 5px;
        color: white;
        width: fit-content;
        height: fit-content;
        border: none;
        outline: none;
        margin: auto 0;
        cursor: pointer !important;
        &:disabled {
          opacity: 0.7;
          cursor: auto !important;
        }
      }
    }

    h1 {
      font-size: 25px;
      line-height: 32px;
      color: #000000;
      margin-right: 24px;
    }

    h2 {
      margin: 0 30px;
      font-size: 16px;
      line-height: 21px;
      margin-left: 0;
      span {
        color: #818181;
      }
    }
  }
}
.card-top {
  &--no-padding {
    padding: 0;
  }
  ul {
    list-style: none; /* Remove default bullets */
  }
  p,
  h2,
  h3,
  ul {
    text-align: left;
    @media (min-width: 992px) {
    }
  }
  .flex {
    display: flex;
    gap: 13px;
    @media (min-width: 992px) {
    }
  }
  input {
    background: #ffffff;
    /* szary napisy */

    border: 1px solid #818181;
    border-radius: 2px;
  }
  ul li::before {
    content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: #243e97;
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
  .heading {
    background: #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:4px;
    h2 {
      font-family: "PT Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 25px;
      text-align: left;
      color: #000000;
    }
    button {
      background: linear-gradient(89.98deg, #102672 0.01%, #384e9b 99.98%);
      color: white;
      width: 30px;
      height: 30px;
      display: grid;
      place-content: center;
      border-radius: 50%;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
}
</style>
