<script setup>
import { usePostStore } from '@/stores/posts';
import PostCard from '@/components/PostCard.vue';

const postStore = usePostStore();
await postStore.fetchPosts();

const searchQuery = ref('');

const filteredPosts = computed(() => {
  return postStore.posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Posts</h1>
    <input v-model="searchQuery" type="text" placeholder="Search posts..." 
      class="mb-4 w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-6 gap-2 lg:gap-1">
      <NuxtLink 
        v-for="post in filteredPosts"
        :key="post.id"
        :to="`/posts/${post.id}`"
        class="block p-4"
      >
      <PostCard :post="post" />
      </NuxtLink>
    </div>
  </div>
</template>
