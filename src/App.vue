<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import News from './components/News.vue';
import Info from './components/Info.vue';
import Media from './components/Media.vue';
import Past from './components/Past.vue';

export default {
  components: {
    'news': News,
    'info': Info,
    'media': Media,
    'past': Past,
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
