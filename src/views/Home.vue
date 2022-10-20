<template>
<transition appear>

	<main class="home">

		<img class="logo" src="@/assets/img/logo.png" alt="Mar" />

		<section class="announcement">
			<p class="emphasis">
				{{ announcement.content }}
			</p>
			<a v-bind:href="announcement.url" class="link-img">
				<img v-bind:src="announcement.img" v-bind:alt="announcement.title" />
			</a>
			<blockquote class="quote" v-bind:cite="quote.url">
				<div class="loading" v-if="!quote.content"></div>
				<div v-else>
					<p>{{ quote.content }}</p>
					<cite>- <span v-if="quote.author">{{ quote.author }}, </span><a v-bind:href="quote.url">{{ quote.source }}</a></cite>
				</div>
			</blockquote>
		</section>

	</main>

</transition>
</template>

<script>

	export default {
		data() {
			return {
				announcement: {
					img: 'https://f4.bcbits.com/img/a4087594339_10.jpg',
					title: 'Everything is Alive by Mar',
					url: 'https://m-a-r.bandcamp.com/album/everything-is-alive',
					content: '“Everything is Alive” out now'
				},
				quote: {
				  content: "“Mar has a real fucking banger here: it’s brutal and honest and vulnerable”",
				  source: "Noob Heavy",
				  url: "https://noobheavy.com/album-review-mar-everything-is-alive-queer-anarchist-doom/"
				}
			}
		}
}

</script>