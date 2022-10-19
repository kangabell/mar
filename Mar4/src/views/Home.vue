<template>
<transition appear>
	

	<main class="home">

		<img src="assets/img/logo.png" alt="Mar" />

		<blockquote class="quote" v-bind:cite="quote.url">
			<div class="loading" v-if="!quote.content"></div>
			<div v-else>
				<p>{{ quote.content }}</p>
				<cite>- {{ quote.author }}, <a v-bind:href="quote.url">{{ quote.source }}</a></cite>
			</div>
		</blockquote>

	</main>

</transition>
</template>

<script>

	export default {
		data() {
			return {
				quote: {
				  author: "Kim Kelly",
				  content: "“The Providence, Rhode Island duo hurtle themselves into waves of apocalyptic sludge and dire noise with zero regard for their own safety; the riffs come fitfully, lurching and pulling like a rabid dog straining at his leash, as vocalist Kay Belardinelli exorcises her demons in real time, gasping for air and calling down thunder. The lyrics tackle the pain and power of recovery and trauma, imbuing the album's aggrieved, menacing character with a deeply personal bent that only deepens its sense of overwhelming darkness.”",
				  source: "Noisey",
				  url: "https://noisey.vice.com/en_us/article/bjx8wd/the-30-best-overlooked-albums-of-2017-so-far"
				},
			}
		}
}

</script>