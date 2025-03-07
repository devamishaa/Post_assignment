<template>
  <div
    class="relative min-h-screen flex flex-col justify-between transition-all duration-500"
  >

    <!-- Main Content -->
    <main class="container mx-auto">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="text-white text-center p-4">
      <p>&copy; 2025 Weather App | Built for 77 Diamonds Test</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from "~/stores/posts";
import { useRuntimeConfig } from "#app";


const postStore = usePostStore();
postStore.fetchPosts();
const config = useRuntimeConfig().public;
</script>

<style scoped>
/* No additional styles needed for the background video */
</style>
