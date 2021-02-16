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
    data() {
      return {
        gifs: [],
      }
    },
    created() {
      this.$nuxt.$on('search-event', () => {
          console.log('asdasd')
        })
    },
    mounted() {
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
          console.log(res)
          this.gifs = res.data.data
        })
        .catch(function (error) {
          console.log(error);
        })
      },
      search() {
        console.log('no mames')
      },
      goToGif(id) {
        this.$router.push({ path: `/gif/${id}` });
      },
    },
  }

</script>

<style>
</style>
