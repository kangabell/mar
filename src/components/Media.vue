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

	export default {
		data() {
			return {
				items: [
					{
						title: 'Fill Your Lungs by Mar',
						type: 'iframe',
						url: 'http://m-a-r.bandcamp.com/album/fill-your-lungs',
						src: 'https://bandcamp.com/EmbeddedPlayer/album=3170236442/size=large/bgcol=edeae6/linkcol=76939e/tracklist=false/artwork=small/transparent=true/'
					},
					{
						title: 'Mar, 2017',
						type:  'image',
						src: 'assets/img/mar-16.jpg',
					},
					{
						title: 'Trust in Nothing by Mar',
						type: 'iframe',
						url: 'http://m-a-r.bandcamp.com/album/trust-in-nothing',
						src: 'https://bandcamp.com/EmbeddedPlayer/album=2917446271/size=large/bgcol=edeae6/linkcol=76939e/tracklist=false/artwork=small/transparent=true/'
					}
				]
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