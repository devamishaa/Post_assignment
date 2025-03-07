import { defineStore } from 'pinia';
import { useFetch } from '#app'; 

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    cacheTime: 15 * 60 * 1000, // 15 minutes
    lastFetched: 0,
    cachedData: 0,
  }),

  actions: {
    async fetchPosts() {
      if (this.isDataFresh()) {
        console.log('✅ Using cached data');
        return this.cachedData;
      }

      console.log('⏳ Fetching new data from API with useFetch...');
      try {
        const { data, error } = await useFetch('https://dummyjson.com/posts');

        if (error.value) {
          throw new Error(error.value);
        }

        this.posts = data.value.posts;
        this.cachedData = data.value;
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
