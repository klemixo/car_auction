<template>
    <div class="car__container container" v-if="carData">
        <div class="car__container__heading card">
            <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
                :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />
            <div class="flex flex-main">
                <div class="flex">
                    <img src="/img/base-img-3.png" alt="">
                </div>
                <div>
                    <div class="flex-middle">
                        <div class="badge">

                            {{ carData.selling_branch }}
                        </div>
                        <h1>
                            {{ carData.production_year }} {{ carData.marka }} {{ carData.model }}
                        </h1>
                        <h2>VIN: {{ carData.vin }}</h2>
                    </div>
                    <div class="flex">
                        <h2>
                            <span>Lot number:</span> {{ carData.run_number }}
                        </h2>
                        <h2>
                            <span>Location: </span> {{ carData.vin }}
                        </h2>
                        <h2>
                            <span>Mileage: </span> {{ carData.odometer }}
                        </h2>
                    </div>
                </div>
                <div class="flex-last">
                    {{ carData.createdate }}
                    <h3>Final bid</h3>
                    {{ carData.final_bid }}
                    <button @click="payNow">
                        CLAIM LOT
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
    props: ["id"],
    components: {
        StripeCheckout,
    },
    data() {
        return {
            carData: null,
            publishableKey: 'pk_test_51L6Y73EIV3WPLa2S77VyiRjJYhLg60WrlK30R8ZDRn9X5hTnp6V6NGTwyyU7F4Eua9WNtIo4ExYvBRnZjojbG7J100NMpo5Hpb',
            loading: false,
            lineItems: [
                {
                    price: 'price_1LG2JvEIV3WPLa2ScLQYEIvk', // The id of the one-time price you created in your Stripe dashboard
                    quantity: 1,
                },
            ],
        }
    },
    computed: {
        successURL() {
            return `${window.location.origin}/#/success/${this.carData.vin}-${this.carData.stock}`
        },
        cancelURL() {
            return `${window.location.origin}/#/error`
        }
    },
    mounted() {
        this.getCarData()
    },
    methods: {
        payNow() {
            this.$refs.checkoutRef.redirectToCheckout();
        },
        getCarData() {
            axios.get(`http://54.36.172.231/api/cars/${this.id}`).then(res => {
                this.carData = res.data[0]
            }).catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.car__container {
    &__heading {
        width: 100%;
        margin: 20px 0;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 29px;

        @media(min-width:992px) {
            flex-direction: row;
            ;
        }

        &__images {
            flex: 1;

            @media(min-width:992px) {
                flex: 3;
            }
        }

        &__data {
            flex: 1;
            width: 100%;

            @media(min-width:992px) {
                width: unset;
                min-width: 410px;
            }

            display:flex;
            flex-direction: column;
            gap:21px;

            .data__box {
                padding: 20px !important;

                &__heading {
                    background: #F8F8F8;
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
                        background: #FFEBB7;
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
        background: #FFFFFF;
        border: 1px solid #ECF1F9;
        padding: 10px;
        border-radius: 8px;

        .badge {
            width: fit-content;
        }

        .flex-middle {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }

        .flex-last {
            padding: 30px;
            background: #ECF1F9;
        }

        .flex-main {
            justify-content: space-between;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;

            h2 {
                margin: 4px 0;
                margin-right: 0;
            }

            img {
                width: 320px;
            }

            button {
                background: #FFCD1E;
                border-radius: 5px;
                color: white;
                width: fit-content;
                height: fit-content;
                border: none;
                outline: none;
                margin: auto 0;
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