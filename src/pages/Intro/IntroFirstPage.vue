<template>
  <div class="flex justify-center items-center flex-col h-screen gap-6">
    <img src="../../assets/Vector.png" alt="vector">
    <p class="text-white text-4xl lato-bold pr-2">UpTodo</p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'IntroFirstPage',
  setup() {
    const router = useRouter()
    
    onMounted(() => {
      setTimeout(() => {
        router.push('/intro1')
      }, 3000)
    })
  }
}
</script>

<style scoped>
  .lato-bold {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-style: normal;
  }
</style>