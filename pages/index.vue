<template>
  <div>
    <masonry
      :cols="{default: 3, 700: 2, 400: 1}"
      :gutter="15"
      >
      <card 
        v-for="(data, index) in gifs" 
        :key="index"
        :img='data.images.downsized.url'
        :alt='data.title'
        :title='data.title'
        @click="goToGif(data.id)"
        class="cursor-pointer">
      </card>
    </masonry>
  </div>
</template>

<script>
  import Card from '@/components/Card';
  import axios from '@/plugins/axios';

  export default {
    name: 'home',
    component: {
      Card,
    },
    transition: "default",
    data() {
      return {
        gifs: [],
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        axios.get(`/gifs/search`, {
          params: {
            q: 'doggi',
          limit: 30,
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

<style>
</style>
