<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import header from './components/header.vue';
import home from './components/home.vue';
import shows from './components/shows.vue';
import media from './components/media.vue';
import past from './components/past.vue';

export default {
  components: {
    'app-header': header,
    'home': home,
    'shows': shows,
    'media': media,
    'past': past,
  }
}

</script>

<style lang="scss">
   @import '../style.scss';
</style>