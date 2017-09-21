<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

import header from './components/header.vue';
import footer from './components/footer.vue';
import home from './components/home.vue';
import shows from './components/shows.vue';
import music from './components/music.vue';
import merch from './components/merch.vue';
import info from './components/info.vue';

export default {
  components: {
    'app-header': header,
    'app-footer': footer,
    'home': home,
    'shows': shows,
    'music': music,
    'merch': merch,
    'info': info
  }
}

</script>

<style lang="scss">
   @import '../style.scss';
</style>