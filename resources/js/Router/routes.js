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
        path: '/claim/:id',
        component: () =>
            import ('../Pages/Claim.vue'),
        name: 'Claim',
        props: true
    },
]

export default routes;