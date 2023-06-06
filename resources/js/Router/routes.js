const routes = [{
        path: '',
        component: () =>
            import ('../Pages/Home.vue'),
        name: 'home'
    },
    {
        path: 'about',
        component: () =>
            import ('../Pages/About.vue'),
        name: 'About'
    },
    {
        path: 'terms',
        component: () =>
            import ('../Pages/Terms.vue'),
        name: 'Terms'
    },
    {
        path: 'contact',
        component: () =>
            import ('../Pages/Contact.vue'),
        name: 'Contact'
    },
    {
        path: '/car/:id',
        component: () =>
            import ('../Pages/Car.vue'),
        name: 'Car',
        props: true
    },
    {
        path: '/error',
        component: () =>
            import ('../Pages/Error.vue'),
        name: 'Error',
        props: true
    },
    {
        path: '/success/:id',
        component: () =>
            import ('../Pages/Success.vue'),
        name: 'Success',
        props: true
    },
]

export default routes;