<template>

	<main class="music">

		<section v-for="album in albums" class="album">

			<img v-bind:src="album.img" v-bind:alt="album.title" />

			<div class="tracklist">
				<iframe v-bind:src=" 'https://bandcamp.com/EmbeddedPlayer/album=' + album.id + '/size=large/bgcol=edeae6/linkcol=76939e/tracklist=true/artwork=none/transparent=true' " seamless><a v-bind:href="album.url">{{ album.title }}</a></iframe>
			</div>

		</section>

	</main>

</template>

<script>

	import {db} from '../firebase';

	export default {
		data() {
			return {
				albums: {}
			}
		},
		firebase: {
			albums: {
				source: db.ref('albums'),
			}
		}
	}

</script>