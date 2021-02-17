<template>
  <article @click="$emit('click')" class="mx-auto my-4 rounded w-full relative transform transition duration-500 hover:scale-105">
    <img class="rounded w-full" :src="img" alt="">
    <span v-if="title != undefined" class="bg-background-200 p-1 text-white text-xs absolute bottom-0 left-0">{{title}}</span>
  </article>
</template>

<script>
export default {
  name: 'Card', 
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
}
</script>