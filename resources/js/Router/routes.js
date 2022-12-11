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
        name: 'about'
    },
    {
        path: 'Terms',
        component: () =>
            import ('../Pages/Terms.vue'),
        name: 'Terms'
    },
    {
        path: 'Contact',
        component: () =>
            import ('../Pages/Contact.vue'),
        name: 'Contact'
    },
]

export default routes;