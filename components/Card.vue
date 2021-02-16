<template>
  <article @click="$emit('click')" class="mx-auto my-4 rounded w-full relative">
    <img class="rounded w-full" :src="img" alt="">
    <span class="bg-background-200 p-1 text-white text-xs absolute bottom-0 left-0">{{title}}</span>
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