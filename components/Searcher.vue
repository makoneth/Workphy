<template>
  <div class="grid grid-cols-12 w-full">
    <input v-model="searchParams" v-on:keyup.enter="search()" placeholder="Search your favorite gifs, woof woof!!"
      type="search" class="col-span-9 lg:col-span-11 p-3 border bg-white text-background">
    <Button @click="search()" class="col-span-3 lg:col-span-1">Search</Button>
  </div>
</template>

<script>
  import Button from '@/components/Button';

  export default {
    name: 'Searcher',
    components: {
      Button,
    },
    data() {
      return {
        searchParams: '',
      }
    },
    methods: {
      search() {
        this.saveSearchs();
        this.$router.push({
          path: `/search/${this.searchParams}`
        });
        // reseteamos la data para limpiar el input
        this.searchParams = '';
      },
      saveSearchs() {
        // Almacenar nuestras búsquedas en localstorage
        let search = [];
        search = JSON.parse(localStorage.getItem('search')) || [];
        search.push(this.searchParams);
        // Guardamos un array con elementos únicos
        let clean = [...new Set(search)]
        // Guardamos nuestra data al storage
        localStorage.setItem('search', JSON.stringify(clean));
      }
    },
  }

</script>
