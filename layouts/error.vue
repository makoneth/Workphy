<template>
  <div class="bg-blue-600">
    <div class="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
      <p v-if="error.statusCode === 404" class="bg-blue-600 text-white error-text">404</p>
      <p v-else class="bg-blue-600 text-white error-found">An error occurred</p>
    </div>
    <div class="bg-blue-600 absolute w-screen bottom-12 mb-6 text-white text-center text-xl">
      <span class="bg-blue-600">Take me back to</span>
      <NuxtLink to="/" class="border-b bg-blue-600">Workphy</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'full'
  }

</script>

<style>
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
