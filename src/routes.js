import home from './components/home.vue';
import shows from './components/shows.vue';
import info from './components/info.vue';
import media from './components/media.vue';
import past from './components/past.vue';

export default [
	{ path: '/', component: home},
	{ path: '/shows', component: shows},
	{ path: '/info', component: info },
	{ path: '/media', component: media },
	{ path: '/history', component: past }
]