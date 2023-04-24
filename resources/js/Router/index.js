import VueRouter from 'vue-router';
import routes from './routes';
import store from "../Store";

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if (to.name !== 'home') {
        store.commit("SET_FILTER", { key: 'vin', value: "x" });
    } else {
        store.commit("SET_FILTER", { key: 'vin', value: null });
    }
    next()
})
export default router;