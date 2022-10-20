<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import header from './components/header.vue';

export default {
  components: {
    'app-header': header,
  }
}

</script>

<style lang="scss">
   @import '../style.scss';
</style>
