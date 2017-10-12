<template>
<transition appear>
	

	<main class="home">

		<img src="assets/img/logo.png" alt="Mar" />

		<blockquote v-bind:cite="quote.url">
			<p>"{{ quote.content }}"</p>
			<cite>- {{ quote.author }}, <a v-bind:href="quote.url">Noisey</a></cite>
		</blockquote>

	</main>

</transition>
</template>

<script>

	import {db} from '../firebase';

	export default {
		data() {
			return {
				quote: {}
			}
		},
		firebase: {
			quote: {
				source: db.ref('quote'),
				asObject: true
			}
		}
}

</script>