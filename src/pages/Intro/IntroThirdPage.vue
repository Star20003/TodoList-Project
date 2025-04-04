<template>
    <div class="flex flex-col h-screen gap-6 animate-fadeIn">
      <div>
        <p class="lato-regular text-gray-500 text-md ml-6 opacity-80 mt-6 hover:text-white" >SKIP</p>
      </div>
      <div class="flex justify-center items-center">
        <img src="../../assets/Intro2.svg" class="w-[240px] h-[270px]" alt="intro2">
      </div>
      <div class="flex justify-center items-center mt-6 gap-2">
        <router-link class="bg-gray-500 w-[30px] h-[5px] rounded-full" to="/intro1"></router-link>
        <router-link class="bg-gray-500 w-[30px] h-[5px] rounded-full" to="/intro2"></router-link>
        <router-link class="bg-gray-500 w-[30px] h-[5px] rounded-full" to="/intro3"></router-link>
      </div>
      <div class="flex justify-center items-center flex-col">
        <p class="lato-bold text-3xl mt-5 text-white">Create daily routine</p>
        <div class="flex justify-center items-center flex-col mt-8">
          <p class="lato-thin text-md text-white">In Uptodo  you can create your</p>
          <p class="lato-thin text-md text-white">personalized routine to stay productive</p>
        </div>
      </div>
      <div class="flex justify-between items-center mt-[75px] mx-6">
        <router-link class="lato-regular text-gray-500 text-md opacity-80 hover:text-white" to="/intro1" >BACK</router-link>
        <Button :button-class="'w-[90px] h-[48px] hover:bg-[#6B5ACD] hover:scale-105 active:bg-[#5B4CEB] active:scale-95'" :label="'NEXT'" @click="nextpage"></Button>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import Button from '../../components/Button.vue';

  export default {
    name: 'IntroThirdPage',
    components: {
      Button
    },
    setup(){
      const router = useRouter()
      const nextpage = () =>{
        router.push('/intro3')
      }
      return {nextpage}
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