<script setup>
import asideMenu from './components/asideMenu.vue';
</script>

<template>
  <asideMenu />
  <div class="flex justify-end">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
