import { createRouter, createWebHistory } from 'vue-router'

import BlogHome from '@/pages/BlogHome'
import BlogPost from '@/pages/BlogPost'
import CafeHome from '@/pages/CafeHome'
import Testing from '@/pages/Testing'
import About from '@/pages/About'
import Home from '@/pages/Home'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Testing,
        },
        
        {
            path: '/about',
            component: About,
        },

        {
            path: '/cafehome',
            component: CafeHome,
        },
        {
            path: '/test',
            component: Home
        },
        {
            path: '/blog/',
            component: BlogHome
        },
        {
            path: '/blog/:slug',
            component: BlogPost,
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log(savedPosition)
        if (savedPosition) {
            console.log('old')
            return savedPosition
          } else {
            console.log('top')
            return { top: 0 }
          }
    },
})

export default router