require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';

import router from './Router/index'
import store from './Store/index';
import App from './App.vue'
import Multiselect from 'vue-multiselect'
import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue-flicking/dist/flicking-inline.css";
import { StripePlugin } from '@vue-stripe/vue-stripe';

const options = {
    pk: 'pk_live_51L6Y73EIV3WPLa2SoKo8rOvj9100pFEtGtwcCpeZ87H70ZmZBbqiMtiv8tN7IIcv3Xtot9YYWlWLaoqoQtF61FcC00x1q1ejow',
    testMode: true, // Boolean. To override the insecure host warning
    stripeAccount: process.env.STRIPE_ACCOUNT,
    apiVersion: process.env.API_VERSION,
    locale: process.env.LOCALE,
};

Vue.use(StripePlugin, options);
Vue.use(Flicking);
// register globally
Vue.component('multiselect', Multiselect)
Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App }
});