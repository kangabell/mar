import home from './components/home.vue';
import music from './components/music.vue';
import merch from './components/merch.vue';
import info from './components/info.vue';
import p404 from './components/p404.vue';

export default [
	{ path: '/', component: home},
	{ path: '/music', component: music },
	{ path: '/merch', component: merch },
	{ path: '/info', component: info },
	{ path: '*', component: p404 }
]