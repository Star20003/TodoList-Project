<template>
    <div class="flex flex-col h-screen gap-6 animate-fadeIn">
      <div>
        <img src="../../assets/arrowLeft.svg" class="ml-6 mt-6" @click="previouspage('/intro3')" />
      </div>
      <div class="flex justify-center items-center flex-col mt-4">
        <p class="lato-bold text-3xl mt-5 text-white">Welcome to UpTodo</p>
        <div class="flex justify-center items-center flex-col mt-8">
          <p class="lato-thin text-md text-white">Please login to your account or create </p>
          <p class="lato-thin text-md text-white">new account to continue</p>
        </div>
      </div>
      <div class="flex justify-center flex-col items-center mt-[300px] mx-6 gap-6">
        <Button :button-class="'w-[327px] h-[48px] hover:bg-[#6B5ACD] hover:scale-105 active:bg-[#5B4CEB] active:scale-95'" :label="'LOGIN'" @click="nextpage('/intro4')"></Button>
        <Button :button-class="'w-[327px] h-[48px] hover-effect active-effect bg-[#121212] border-[2px] border-[#8875FF]'" :label="'CREATE ACCOUNT'" @click="nextpage('/intro4')"></Button>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import Button from '../../components/Button.vue';

  export default {
    name: 'IntroForthPage',
    components: {
      Button
    },
    setup(){
      const router = useRouter()
      const nextpage = (route) => {
        router.push(route)
      }
      const previouspage = (route) => {
        router.push(route)
      }
      return {nextpage, previouspage}
    }
  }
  </script>
  
  <style scoped>
    .lato-regular {
      font-family: "Lato", sans-serif;
      font-weight: 500;
      font-style: normal;
    }
    .lato-bold {
      font-family: "Lato", sans-serif;
      font-weight: 600;
      font-style: normal;
    }
    .lato-thin {
      font-family: "Lato", sans-serif;
      font-weight: 300;
      font-style: normal;
    }
    .router-link-active {
      background-color: white;
      box-shadow: 0 0 8px #fff;
    }
    .hover-effect:hover {
        box-shadow: 0 0 8px #8875FF;
        scale: 105%;
    }
    .active-effect:active {
        box-shadow: 0 0 8px #8875FF;
        scale: 95%;
    }
    .animate-fadeIn {
      opacity: 0;
      animation: fadeIn ease 1s;
      animation-fill-mode: forwards;
    }
    @keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
  </style>