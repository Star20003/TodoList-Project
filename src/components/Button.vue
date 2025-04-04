<template>
    <button :class="['transition-all duration-300 bg-[#8875FF] rounded-md', buttonClass]" @click="$emit('click')">
        <p class="text-md text-white lato-regular">{{label}}</p>
    </button>
</template>
  
<script>
  export default {
    name: 'MainButton',
    props:{
        buttonClass: {
            type: String,
            required: true
        },
        label:{
            type: String,
            required: true
        }
    },
    methods:{

    }
  };
</script>

<style scoped>
  .main-background{
    background-color: #121212;
  }
  .lato-regular {
      font-family: "Lato", sans-serif;
      font-weight: 500;
      font-style: normal;
    }
</style>


