<template>
  <div class="container mx-auto px-7 pb-14">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
  import Header from '@/components/Header';
export default {
  layout: 'default',
  components: {
    Header
  }
}
</script>