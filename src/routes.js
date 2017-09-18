import home from './components/home.vue';
import news from './components/news.vue';
import info from './components/info.vue';
import media from './components/media.vue';
import past from './components/past.vue';

export default [
	{ path: '/', component: home},
	{ path: '/news', component: news},
	{ path: '/info', component: info },
	{ path: '/media', component: media },
	{ path: '/history', component: past }
]