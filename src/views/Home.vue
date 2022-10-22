<template>
<transition appear>

	<main class="home">

		<img class="logo" src="@/assets/img/logo.png" alt="Mar" />

		<section class="announcement">
			<div class="card">
				<img v-bind:src="announcement.img" v-bind:alt="announcement.title" />
				<a v-bind:href="announcement.url" class="link-img" target="_blank">
					<span class="emphasis">
						{{ announcement.content }}
					</span>
				</a>
			</div>
			<blockquote class="quote" v-bind:cite="quote.url">
				<div class="loading" v-if="!quote.content"></div>
				<div v-else>
					<p>{{ quote.content }}</p>
					<cite>- <span v-if="quote.author">{{ quote.author }}, </span><a v-bind:href="quote.url" target="_blank">{{ quote.source }}</a></cite>
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
					content: "“With a sound that melds the heaviness of doom, the discord of noise rock and the rolling ambience of shoegaze, Mar have created a unique immersive sound that conjures vast soundscapes of the imagination, and on Everything is Alive that soundscape is a forest on fire.”",
					source: "Astral Noize",
					url: "https://astralnoizeuk.com/2022/10/18/review-mar-everything-is-alive/"
				}
			}
		}
}

</script>