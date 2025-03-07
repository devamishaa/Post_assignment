import { defineStore } from 'pinia';

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    cacheTime: 15 * 60 * 1000, // 15 minutes in milliseconds
    lastFetched: 0,
  }),

  actions: {
    async fetchPosts() {
      // Check if cache is valid
      if (this.posts.length && Date.now() - this.lastFetched < this.cacheTime) {
        console.log('✅ Using cached data');
        return;
      }

      console.log('⏳ Fetching new data from API...');
      try {
        const response = await fetch('https://dummyjson.com/posts'); 
        const data = await response.json();
        this.posts = data.posts;
        this.lastFetched = Date.now();
        console.log('🔄 Data fetched successfully and cached.');
      } catch (error) {
        console.error('❌ Error fetching posts:', error);
      }
    },
  },
});
