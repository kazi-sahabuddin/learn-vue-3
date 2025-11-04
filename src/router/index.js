import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/AboutView.vue'
import BlogPost from '@/views/BlogPost.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/blogPosts',
      name: 'blogPosts',
      component: BlogPosts,
      children: [{ path: '/blogPosts/:id', name: 'blogPost', component: BlogPost }],
    },
    { path: '/about', name: 'about', component: About },
  ],
})

export default router
