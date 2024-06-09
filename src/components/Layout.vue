<script setup>
import NavigationComponent from './Navigation/Navigation.vue'
</script>

<template>
  <navigation-component />
  <div class="layout-content">
    <router-view />
  </div>
</template>

<style scoped>
</style>
