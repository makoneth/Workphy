<template>
  <button @click="$emit('click')" class="bg-primary-100 hover:bg-primary-200 text-text text-sm font-bold py-3 px-4">
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