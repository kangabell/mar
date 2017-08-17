<template>

	<main>

		<section v-for="item in items">

			<iframe v-if="item.type === 'iframe'" v-bind:src="item.src" seamless><a v-bind:href="item.url">{{ item.title }}</a></iframe>

			<figure v-if="item.type === 'image'">
				<a v-bind:href="item.src">
					<img v-bind:src="item.src" v-bind:alt="item.title" />
					<figcaption>[click to enlarge]</figcaption>
				</a>
			</figure>

		</section>

	</main>

</template>

<script>

	import {db} from '../firebase';

	export default {
		data() {
			items: {}
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