<template>

	<main class="music">

		<section v-for="item in items">

			<iframe v-if="item.type === 'iframe'" v-bind:src=" 'https://bandcamp.com/EmbeddedPlayer/album=' + item.albumID + '/size=large/bgcol=edeae6/linkcol=76939e/tracklist=true' " seamless><a v-bind:href="item.url">{{ item.title }}</a></iframe>

		</section>

	</main>

</template>

<script>

	import {db} from '../firebase';

	export default {
		data() {
			return {
				items: {}
			}
		},
		firebase: {
			items: {
				source: db.ref('items'),
			}
		}
	}

</script>