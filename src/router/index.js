import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/AboutView.vue'
import BlogPost from '@/views/BlogPost.vue'
import BlogPostsGreeting from '@/views/BlogPostsGreeting.vue'
import NotFound from '@/views/NotFound.vue'
import AdsView from '@/views/AdsView.vue'
import LogIn from '@/views/LogIn.vue'
import MainLayout from '@/views/layout/MainLayout.vue'
import { isAuthenticated } from '@/apis/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'mainLayout',
      component: MainLayout,
      redirect: { name: 'home' },
      children: [
        { path: '/home', name: 'home', component: Home, meta: { requiresAuth: false } },
        {
          path: '/blog-posts',
          name: 'blogPosts',
          component: BlogPosts,
          redirect: { name: 'blogPostsGreeting' },
          children: [
            {
              path: '',
              name: 'blogPostsGreeting',
              component: BlogPostsGreeting,
              meta: { requiresAuth: false },
            },
            {
              path: ':id(\\d+)',
              name: 'blogPost',
              components: {
                default: BlogPost,
                sidebar: AdsView,
              },
              meta: { requiresAuth: true },
            },
          ],
        },
        { path: '/about', name: 'about', component: About, meta: { requiresAuth: false } },
      ],
    },

    { path: '/login', name: 'login', component: LogIn, meta: { requiresAuth: false } },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
      meta: { requiresAuth: false },
    },
  ],
})

router.beforeEach((to, from) => {
  console.log(`${from.name} -> ${to.name}`)
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return { name: 'login', query: { redirectTo: to.fullPath } }
  }
})

export default router
