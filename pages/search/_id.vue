<template>
  <div>
    <h2 class="text-white font-bold text-4xl mb-5">{{ this.id }}</h2>

    <masonry
      :cols="{default: 3, 700: 2, 400: 1}"
      :gutter="15"
      >
      <card 
        v-for="(data, index) in gifs" 
        :key="index"
        :img='data.images.downsized.url'
        :title='data.title'
        @click="goToGif(data.id)"
        class="cursor-pointer">
      </card>
    </masonry>
  </div>
</template>

<script>
import axios from '@/plugins/axios';
import Card from '@/components/Card';

export default {
  name: 'Search',
  component: {
    Card
  },
  transition: "default",
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  data() {
    return {
      gifs: []
    }
  },
  mounted() {
    this.fetchSearch();
  },
  methods: {
    fetchSearch() {
      axios.get(`/gifs/search`, {
        params: {
          q: this.id,
          limit: 20,
        }
      })
      .then(res => {
        this.gifs = res.data.data
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    goToGif(id) {
      this.$router.push({ path: `/gif/${id}` });
    },
  },
}
</script>