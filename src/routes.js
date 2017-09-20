import home from './components/home.vue';
import shows from './components/shows.vue';
import music from './components/music.vue';
import merch from './components/merch.vue';

export default [
	{ path: '/', component: home},
	{ path: '/shows', component: shows},
	{ path: '/music', component: music },
	{ path: '/merch', component: merch }
]