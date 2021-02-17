<template>
  <div class="card border w-full hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
      <div class="w-full opacity-80 absolute top-0" 
      style="
          height: 100%;
          background-image: url(https://unsplash.com/photos/iFPBRwZ4I-M/download?force=true&w=640);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;">
      </div>
      <div class="profile flex m-3 ml-4 text-white bg-transparent z-10">
        <img class="w-28 h-28 p-1 bg-white rounded-full" src="https://i.pinimg.com/736x/3b/74/bc/3b74bca401101300aba962b2d867a209.jpg" alt="Avatar"/>
        <div class="title mt-11 ml-5 font-bold flex flex-col bg-transparent">
          <div class="name break-words bg-transparent text-xl md:text-2xl">Guest User</div>
        </div>
      </div>
      <div class="buttons z-20 hidden md:flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
        <Button>Settings</Button>
      </div>
    </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Profile',
  Components: {
    Button
  },
}
</script>