import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/AboutView.vue'
import BlogPost from '@/views/BlogPost.vue'
import BlogPostsGreeting from '@/views/BlogPostsGreeting.vue'
import NotFound from '@/views/NotFound.vue'
import AdsView from '@/views/AdsView.vue'
import LogIn from '@/views/LogIn.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/blog-posts',
      name: 'blogPosts',
      component: BlogPosts,
      redirect: { name: 'blogPostsGreeting' },
      children: [
        { path: '', name: 'blogPostsGreeting', component: BlogPostsGreeting },
        {
          path: ':id(\\d+)',
          name: 'blogPost',
          components: {
            default: BlogPost,
            sidebar: AdsView,
          },
        },
      ],
    },
    { path: '/about', name: 'about', component: About },
    { path: '/login', name: 'login', component: LogIn },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
    },
  ],
})

router.beforeEach((to, from) => {
  console.log(`${from.name} -> ${to.name}`)
  if (to.name === 'blogPost') {
    return '/login'
  }
})

export default router
