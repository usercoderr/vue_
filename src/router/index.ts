import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext} from 'vue-router'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const checkAuth = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) => {
    let isAuthChecked = false;

    onAuthStateChanged(getAuth(), (user) => {
        if (!isAuthChecked) {
            isAuthChecked = true;

            if (user) {
                if (to.name === 'Auth') {
                    next({ name: '/' });
                } else {
                    next();
                }
            } else {
                if (to.name !== 'Auth') {
                    next({ name: 'Auth' });
                } else {
                    next();
                }
            }
        }
    });
};


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/PageHome.vue'),
        beforeEnter: checkAuth
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/views/PageAuth.vue'),
        beforeEnter: checkAuth

    },
    {
        path: '/interview/:id',
        name: 'Interview',
        component: () => import('@/views/PageInterview.vue'),
        beforeEnter: checkAuth

    },
    {
        path: '/list',
        name: 'List',
        component: () => import('@/views/PageList.vue'),
        beforeEnter: checkAuth

    },
    {
        path: '/statistic',
        name: 'Statistic',
        component: () => import('@/views/PageStatistic.vue'),
        beforeEnter: checkAuth

    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router
