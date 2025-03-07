<script setup>
import { watchEffect } from 'vue';

const props = defineProps(['post']);

watchEffect(() => {
  console.log('Post received:', props.post);
});
</script>

<template>
  <div v-if="post" class="flex flex-col justify-between w-full max-w-sm h-64 
           p-6 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 
           text-white shadow-lg rounded-xl hover:shadow-2xl transition-transform 
           transform hover:scale-105">
    <h2 class="text-2xl font-bold mb-3 line-clamp-2">Id: {{ post.id }}</h2>
    <h2 class="text-2xl font-bold mb-3 line-clamp-2">{{ post.title }}</h2>
    <p class="text-gray-200 text-sm line-clamp-3">{{ post.body }}</p>
  </div>
</template>
