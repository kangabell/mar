<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import header from './components/header.vue';
import news from './components/news.vue';
import info from './components/info.vue';
import media from './components/media.vue';
import past from './components/past.vue';

export default {
  components: {
    'app-header': header,
    'news': news,
    'info': info,
    'media': media,
    'past': past,
  }
}

</script>

<style lang="scss">
   @import '../style.scss';
</style>