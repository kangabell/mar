<template>

	<main class="music">

		<section v-for="item in items">

			<iframe v-if="item.type === 'iframe'" v-bind:src="item.src" seamless><a v-bind:href="item.url">{{ item.title }}</a></iframe>

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