<template>
    <div class="flex justify-center items-center min-h-screen ">
      <div class="w-96 shadow-lg main-background">
        <router-view></router-view>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'MainLayout',
  };
</script>

<style scoped>
  .main-background{
    background-color: #121212;
  }
</style>