import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("@/views/HomeView.vue"),
            meta: {
                title: '首页',
            }
        },{
            path: '/login',
            name: 'login',
            meta: {
                title: '登录',
                noLayout:true,
            },
            component: () => import("@/views/LoginView.vue")
        }, {
            path: '/scene/:id',
            name: 'scene',
            component: () => import("@/views/SceneView.vue")
        }, {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: () => import("@/views/NotFoundView.vue")
        },
        {
            path: '/about',
            name: 'about',
            component: () => import("@/views/AboutView.vue")
        },{
            path: '/external',
            name: 'external',
            component: () => import("@/views/ExternalView.vue")
        }, {
            path: '/list/:id',
            name: 'list',
            meta: {
                title: '列表',
            },
            component: () => import("@/views/ListView.vue")
        }
    ]
})

router.beforeEach((to, from) => {
    document.title = to.meta?.title || 'Noon Admin Pro'
    // console.log(to.meta)
})

export default router
