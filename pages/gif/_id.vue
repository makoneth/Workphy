<template>
  <div>
    search {{ this.id }}

    <masonry
      :cols="{default: 3, 700: 2, 400: 1}"
      :gutter="15"
      >
      <card 
        v-for="(data, index) in gifs" 
        :key="index"
        :img='data.images.downsized.url'
        :title='data.title'>
      </card>
    </masonry>
  </div>
</template>

<script>
import axios from '@/plugins/axios';
import Card from '@/components/Card';

export default {
  name: 'Gif',
  component: {
    Card
  },
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
      axios.get(`/gifs`, {
        params: {
          ids: this.id,
        }
      })
      .then(res => {
        console.log(res)
        this.gifs = res.data.data
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  },
}
</script>