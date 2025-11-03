import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/blogPosts', component: BlogPosts },
    { path: '/about', component: About },
  ],
})

export default router
