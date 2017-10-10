<template>
<transition appear>

	<main class="music">

		<section v-for="album in albums" class="album">

			<img v-bind:src="album.img" v-bind:alt="album.title" />

			<div class="tracklist">
				<div class="loading" v-show="!iframe.loaded"></div>
				<iframe v-bind:src=" 'https://bandcamp.com/EmbeddedPlayer/album=' + album.id + '/size=large/bgcol=edeae6/linkcol=76939e/tracklist=true/artwork=none/transparent=true' " @load="load" seamless><a v-bind:href="album.url">{{ album.title }}</a></iframe>
			</div>

		</section>

	</main>

</transition>
</template>

<script>

	import {db} from '../firebase';

	export default {
		data() {
			return {
				albums: {},
				iframe: {
					loaded: false
				}
			}
		},
		firebase: {
			albums: {
				source: db.ref('albums'),
			}
		},
		methods: {
			load: function() {
				this.iframe.loaded = true;
			}
		}
	}

</script>