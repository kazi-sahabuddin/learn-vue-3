<template>
  <div class="loading" v-if="loading">Loading...</div>
  <div class="blog-post-container" v-else-if="blogPost">
    <div>Blog Id: {{ $route.params.id }}</div>
    <h1 class="blog-title">{{ blogPost.title }}</h1>
    <div class="blog-content">
      <p>{{ blogPost.content }}</p>
    </div>
  </div>
  <div v-else>something went wrong</div>
</template>

<script setup>
import api from '@/apis/blogPosts'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const blogPost = ref([])
const route = useRoute()
const loading = ref(true)

watch(
  () => route.params.id,
  (newId, oldId) => {
    console.log(oldId)
    loadBlogPost(newId)
  },
  { immediate: true },
)

async function loadBlogPost(id) {
  try {
    blogPost.value = await api.findById(id)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
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
