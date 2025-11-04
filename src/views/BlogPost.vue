<template>
  <div class="blog-post-container" v-if="blogPost">
    <div>Blog Id: {{ $route.params.id }}</div>
    <h1 class="blog-title">{{ blogPost.title }}</h1>
    <div class="blog-content">
      <p>{{ blogPost.content }}</p>
    </div>
  </div>
</template>

<script setup>
import api from '@/apis/blogPosts'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const blogPost = ref([])
const route = useRoute()

onMounted(() => loadBlogPost(route.params.id))

async function loadBlogPost(id) {
  blogPost.value = await api.findById(id)
}
</script>

<style lang="scss" scoped>
.blog-post-container {
  padding: 1.5rem;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  .blog-title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
  }

  .blog-content {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    text-align: justify;

    p {
      margin-bottom: 1rem;
    }
  }
}
</style>
