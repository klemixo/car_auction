const routes = [
    {
        path: "",
        component: () => import("../Pages/Home.vue"),
        name: "home",
        meta: { title: "VINFAX - Free Sales and Damage history" }
    },
    {
        path: "about",
        component: () => import("../Pages/About.vue"),
        name: "About",
        meta: { title: "VINFAX - Free Sales and Damage history" }
    },
    {
        path: "terms",
        component: () => import("../Pages/Terms.vue"),
        name: "Terms",
        meta: { title: "VINFAX - Free Sales and Damage history" }
    },
    {
        path: "contact",
        component: () => import("../Pages/Contact.vue"),
        name: "Contact",
        meta: { title: "VINFAX - Free Sales and Damage history" }
    },
    {
        path: "/car/:make/:model/:id/:vin",
        component: () => import("../Pages/Car.vue"),
        name: "Car",
        props: true,
        meta: { title: "VINFAX - Free Sales and Damage history" }
    },
    {
        path: "/error",
        component: () => import("../Pages/Error.vue"),
        name: "Error",
        props: true,
        meta: { title: "VINFAX - Free Sales and Damage history" }
    },
    {
        path: "/success/:id",
        component: () => import("../Pages/Success.vue"),
        name: "Success",
        props: true,
        meta: { title: "VINFAX - Free Sales and Damage history" }
    }
];

export default routes;
