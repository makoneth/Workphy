<template>
  <nav class="flex flex-wrap items-center justify-end relative w-full">      
    <div class="flex lg:hidden">
      <button id="hamburger">
        <img class="toggle block" src="https://firebasestorage.googleapis.com/v0/b/appworkphy.appspot.com/o/menu-squared-2.png?alt=media&token=c06f3aa1-3eb4-4cc1-b979-cb09ff6c927f" width="40" height="40" />
        <img class="toggle hidden" src="https://firebasestorage.googleapis.com/v0/b/appworkphy.appspot.com/o/close-window.png?alt=media&token=f143cb75-6e12-47c5-93f5-9b3202f478b8" width="40" height="40" />
      </button>
    </div>
    <div class="toggle hidden absolute bg-background-200 lg:bg-transparent -bottom-32 lg:bottom-0 lg:relative lg:flex w-max lg:w-auto text-right text-bold py-4 lg:py-0 mt-5 lg:mt-0">
      <NuxtLink 
        to="/" 
        class="transform transition duration-500 hover:scale-75 block lg:inline-block font-bold text-xl text-text hover:text-yellow-100 px-3">
          Gifs
      </NuxtLink>
      <NuxtLink 
        to="/stickers" 
        class="transform transition duration-500 hover:scale-75 block lg:inline-block font-bold text-xl text-text hover:text-yellow-100 px-3">
          Stickers
      </NuxtLink>
      <NuxtLink 
        to="/myprofile" 
        class="transform transition duration-500 hover:scale-75 block lg:inline-block font-bold text-xl text-text hover:text-yellow-100 px-3">
          My profile
      </NuxtLink>
    </div>
  </nav>  
</template>

<script>
export default {
  name: 'NavBar',
  mounted() {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  },
}
</script>