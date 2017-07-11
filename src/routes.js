import News from './components/News.vue';
import Info from './components/Info.vue';
import Media from './components/Media.vue';
import past from './components/Past.vue';

export default [
	{ path: '/', component: News},
	{ path: '/info', component: Info },
	{ path: '/media', component: Media },
	{ path: '/history', component: past }
]