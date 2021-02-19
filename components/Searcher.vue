<template>
  <div class="grid grid-cols-12 w-full">
    <input v-model="searchParams" v-on:keyup.enter="action()" :placeholder="placeholder"
      type="search" class="col-span-9 lg:col-span-11 p-3 border bg-white text-background">
    <Button @click="action()" class="col-span-3 lg:col-span-1">{{ btnText }}</Button>
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
    props: {
      type: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: false,
        default: 'search'
      },
      btnText: {
        type: String,
        required: true,
        default: 'Search'
      },
      placeholder: {
        type: String,
        required: true,
        default: 'Placeholder default'
      }
    },
    methods: {
      action () {
        // Evaluamos que camino tomar
        this.type === 'search' && this.search()
        this.type === 'filter' && this.emmitData()
      },
      emmitData() {
        // Emitimos el modelo al padre
        this.$emit('update:filterParams', this.searchParams)
      },
      search() {
        this.saveSearchs();
        this.$router.push({
          path: `/${this.path}/${this.searchParams}`
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
