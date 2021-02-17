<template>
  <div class="text-text">
    <h2 class="text-4xl font-bold">User profile</h2>
    <p class="text-xl mt-3">See your previous searches and your favorites</p>

    <Profile class="mt-7" />

    <section class="grid grid-cols-12 gap-4 mt-8">
      <aside class="col-span-12 lg:col-span-3 max-h-80 overflow-y-auto bg-background-200 rounded-md text-text p-5">
        <h3 class="text-2xl font-bold flex items-center justify-between">
          My history
          <Button v-if="records.length > 0" @click="clean()"> Clear</Button>
        </h3>
        <p v-if="records.length === 0" class="text-1xl mt-2">
          Ooops !! You still do not perform any search
        </p>
        <ul v-if="records.length > 0" class="text-text pt-4">
          <li v-for="(el, index) in records" :key="index">
            <nuxt-link :to="{ path: `/search/${el}` }">{{el}}</nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="col-span-12 lg:col-span-9 px-5">
        <h3 class="text-2xl font-bold flex items-center justify-between">My favorites</h3>
        <Favorites/>
      </div>
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Card from '@/components/Card'
import Favorites from '@/components/Favorites'
import Profile from '@/components/Profile'
export default {
  name:'MySearches',
  components: {
    Button,
    Card,
    Favorites,
    Profile
  },
  transition: "default",
  data() {
    return {
      records: JSON.parse(localStorage.getItem('search')) || [],
    }
  },
  methods: {
    clean() {
      // Limpiamos el arreglo
      this.records = [];
      // Guardamos nuestra arreglo limpio
      localStorage.setItem('search', JSON.stringify(this.records));
    }
  },
}
</script>