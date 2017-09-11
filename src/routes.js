import news from './components/news.vue';
import info from './components/info.vue';
import media from './components/media.vue';
import past from './components/past.vue';
import addEvent from './components/addevent.vue';

export default [
	{ path: '/', component: news},
	{ path: '/info', component: info },
	{ path: '/media', component: media },
	{ path: '/history', component: past },
	{ path: '/add-event', component: addEvent }
]