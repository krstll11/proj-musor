<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderMusor from './components/HeaderMusor.vue';
import FooterMusor from './components/FooterMusor.vue';
</script>

<template>
  <header>
    <HeaderMusor></HeaderMusor>
  </header>
<main>

</main>
  <RouterView />
  <footer>
    <FooterMusor></FooterMusor>
  </footer>
</template>

<style scoped>

</style>
