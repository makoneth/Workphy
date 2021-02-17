<template>
  <div>
    <h2 v-for="(data, index) in gifs" :key="index" class="text-white font-bold text-4xl mb-5">{{ data.title }}</h2>

    <section class="grid grid-cols-12 gap-4 mt-8">
      <aside class="col-span-12 lg:col-span-6 bg-background-200 rounded-md text-background-100 px-5">
        <card 
          v-for="(data, index) in gifs" 
          :key="index" 
          :img='data.images.downsized.url'>
        </card>
      </aside>
      <div class="col-span-12 lg:col-span-6 px-5">
        <h3 class="text-text text-2xl mb-5 flex">
          Share with your friends
          <svg class="animate-bounce w-6 h-6 ml-4 text-amber-900" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </h3>
        <article class="flex flex-wrap w-full">
          <ShareNetwork
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :style="{backgroundColor: network.color}"
            :url="sharing.url"
            :title="sharing.title"
            :quote="sharing.quote"
            :hashtags="sharing.hashtags"
            class="m-1 p-2 text-white transform transition duration-500 hover:rotate-360"
          >
            <i :class="network.icon"></i>
            <span>{{ network.name }}</span>
          </ShareNetwork>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from '@/plugins/axios';
  import Card from '@/components/Card';

  export default {
    name: 'Gif',
    component: {
      Card,
    },
    transition: "default",
    async asyncData({
      params
    }) {
      const id = params.id;
      return {
        id
      };
    },
    data() {
      return {
        sharing: {
          url: '',
          title: '',
          quote: 'I love workphy!!!',
          hashtags: 'Workphy',
        },
        networks: [
          { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
          { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
          { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },
       ],
       gifs: [{
          "url": "value",
          "title": "value",
          "images": {
            "downsized": {
              "url": "value",
            },
          }
        }],
      }
    },
    mounted() {
      this.fetchSearch();
    },
    destroyed() {
      this.gifs = []
    },
    methods: {
      fetchSearch() {
        axios.get(`/gifs`, {
            params: {
              ids: this.id,
            }
          })
          .then(res => {
            this.gifs = res.data.data
            this.sharing.url = res.data.data[0].url
            this.sharing.title = res.data.data[0].title
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    },
  }

</script>
