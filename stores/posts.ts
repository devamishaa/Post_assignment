import { defineStore } from 'pinia';

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    cacheTime: 15 * 60 * 1000, // 15 minutes in milliseconds
    lastFetched: 0,
    cachedData: null,
  }),

  actions: {
    async fetchPosts() {
      // Check if data is still fresh (within 15 minutes)
      if (this.isDataFresh()) {
        console.log('✅ Using cached data');
        return this.cachedData;
      }

      console.log('⏳ Fetching new data from API...');
      try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        this.posts = data.posts;
        this.cachedData = data;
        this.lastFetched = Date.now();
        console.log('🔄 Data fetched successfully and cached.');
      } catch (error) {
        console.error('❌ Error fetching posts:', error);
      }
    },

    isDataFresh() {
      return this.lastFetched && (Date.now() - this.lastFetched < this.cacheTime);
    }
  },
});
