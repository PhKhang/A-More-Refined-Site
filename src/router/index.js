import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import SimpleText from '../components/SimpleText.vue'
import BlogHome from '@/components/BlogHome'
import BlogPost from '@/components/BlogPost'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: SimpleText,
        },
        
        {
            path: '/about',
            component: HelloWorld,
        },
        {
            path: '/blog/',
            component: BlogHome
        },
        {
            path: '/blog/:slug',
            component: BlogPost,
        }
    ]
})

export default router