<template>
<transition appear>
	

	<main class="home">

		<img src="assets/img/logo.png" alt="Mar" />

		<blockquote class="quote" v-bind:cite="quote.url">
			<div class="loading" v-if="!quote.content"></div>
			<div v-else>
				<p>"{{ quote.content }}"</p>
				<cite>- {{ quote.author }}, <a v-bind:href="quote.url">{{ quote.source }}</a></cite>
			</div>
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