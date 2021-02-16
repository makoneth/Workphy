<template>
  <button @click="$emit('click')" class="bg-secondary hover:bg-blue-900 text-white text-sm font-bold py-3 px-4">
    <slot />
  </button>
</template>

<script>
export default {
  name:'Button',
  props: {
    type: {
      type: String,
      default: ''
    },
  }
}
</script>