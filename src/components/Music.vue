<template>

	<main>

		<section v-for="item in items">

			<iframe v-if="item.type === 'iframe'" v-bind:src="item.src" seamless><a v-bind:href="item.url">{{ item.title }}</a></iframe>

		</section>

		<section>
			<a href="https://m-a-r.bandcamp.com/" class="img bandcamp"><img src="img/bandcamp-logo.png" alt="Bandcamp logo" /></a>
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

<style>

	iframe {
		border: 0;
		width: 100%;
		height: 120px;
	}

</style>