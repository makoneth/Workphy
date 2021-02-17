<template>
  <header class="mb-7">
    <div class="grid grid-cols-12 py-6 mb-3">
      <NuxtLink to="/" class="col-span-9 lg:col-span-2">
        <Logo />
      </NuxtLink>
      <NavBar class="col-span-3 lg:col-span-10 w-full"></NavBar>
    </div>
    <div class="grid grid-cols-12 w-full">
      <Searcher class="col-span-12" />
    </div>
  </header>
</template>

<script>
  import Logo from '@/components/Logo';
  import NavBar from '@/components/NavBar';
  import Searcher from '@/components/Searcher';

  export default {
  components: { Searcher },
    name: 'Header',
    Components: {
      Logo,
      NavBar,
      Searcher,
    },
  }
</script>
