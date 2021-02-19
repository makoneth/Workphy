<template>
  <div>
    <div class="h-screen w-screen flex justify-center content-center flex-wrap">
      <p v-if="error.statusCode === 404" class="text-white error-text">404</p>
      <p v-else class="text-white error-found">An error occurred</p>
    </div>
    <div class="absolute w-screen bottom-12 mb-6 text-white text-center text-xl">
      <span>Take me back to</span>
      <NuxtLink to="/" class="border-b">Workphy</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'full'
  }

</script>

<style scoped>
  .error-text {
    font-size: 120px;
  }

  .error-found {
    font-size: 50px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .error-text {
      font-size: 200px;
    }

    .error-found {
      font-size: 100px;
    }
  }

</style>
