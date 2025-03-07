<script setup>
const route = useRoute();
const { data: post, pending } = await useAsyncData(`post-${route.params.id}`, () =>
  fetch(`https://dummyjson.com/posts/${route.params.id}`).then(res => res.json())
);
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ⬅ Back to Posts
      </NuxtLink>

      <!-- Skeleton Loader (Shown when pending) -->
      <div v-if="pending" class="animate-pulse mt-6">
        <div class="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div class="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div class="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div class="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
        <div class="flex space-x-2 mt-4">
          <div class="h-6 bg-gray-300 rounded-full w-16"></div>
          <div class="h-6 bg-gray-300 rounded-full w-20"></div>
        </div>
        <div class="flex justify-between items-center mt-6">
          <div class="h-6 bg-gray-300 rounded w-20"></div>
          <div class="h-6 bg-gray-300 rounded w-16"></div>
        </div>
      </div>

      <!-- Post Content (Shown after loading) -->
      <div v-else-if="post" class="mt-6">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ post.title }}</h1>
        <p class="text-gray-700 text-lg leading-relaxed">{{ post.body }}</p>

        <!-- Tags Section -->
        <div class="mt-4">
          <h3 class="text-xl font-semibold text-gray-800">Tags:</h3>
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-full"
            >
              #{{ tag }}
            </span>
          </div>
        </div>

        <!-- Reactions & Views -->
        <div class="mt-6 flex justify-between items-center text-gray-600 text-lg">
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1">
              👍 {{ post.reactions.likes }}
            </span>
            <span class="flex items-center gap-1">
              👎 {{ post.reactions.dislikes }}
            </span>
          </div>
          <div class="flex items-center gap-2">
            👁️ {{ post.views }} Views
          </div>
        </div>

        <!-- User Info -->
        <div class="mt-6 text-gray-600 text-sm">
          <span class="font-semibold">Posted by User:</span> {{ post.userId }}
        </div>
      </div>

      <!-- Error Handling -->
      <div v-else class="text-center text-red-500 mt-6">
        <p>Failed to load post details.</p>
      </div>
    </div>
  </div>
</template>
