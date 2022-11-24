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