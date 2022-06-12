import home from './components/home.vue';
import shows from './components/shows.vue';
import music from './components/music.vue';
import merch from './components/merch.vue';
import info from './components/info.vue';
import p404 from './components/p404.vue';

export default [
	{ path: '/', component: home},
	{ path: '/shows', component: shows},
	{ path: '/music', component: music },
	{ path: '/merch', component: merch },
	{ path: '/info', component: info },
	{ path: '*', component: p404 }
]