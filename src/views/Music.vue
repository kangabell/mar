<template>
<transition appear>

	<main class="music">

		<template v-for="album in albums">

			<section class="album">
				<img v-bind:src="album.img" v-bind:alt="album.title" />

				<div class="tracklist">
					<div class="loading" v-show="!iframe.loaded"></div>
					<iframe v-bind:src=" 'https://bandcamp.com/EmbeddedPlayer/album=' + album.id + '/size=large/bgcol=131416/linkcol=a04c36/tracklist=true/artwork=none/transparent=true' " @load="load" seamless><a v-bind:href="album.url">{{ album.title }}</a></iframe>
				</div>
			</section>

		</template>

	</main>

</transition>
</template>

<script>

	export default {
		data() {
			return {
				albums: [
					{
						id: '3137710142',
						img: 'https://f4.bcbits.com/img/a4087594339_16.jpg',
						title: 'Everything is Alive by Mar',
						type: 'iframe',
						url: 'https://m-a-r.bandcamp.com/album/everything-is-alive'
					},
					{
						id: "62173944",
						img: "https://f4.bcbits.com/img/a0687181381_10.jpg",
						title: "Pressed in the Earth by Mar",
						type: "iframe",
						url: "https://m-a-r.bandcamp.com/album/pressed-in-the-earth"
					},
					{
						id: "3170236442",
						img: "https://f4.bcbits.com/img/a1209643772_16.jpg",
						title: "Fill Your Lungs by Mar",
						type: "iframe",
						url: "http://m-a-r.bandcamp.com/album/fill-your-lungs"
					},
					{
						id: "2917446271",
						img: "https://f4.bcbits.com/img/a0799399982_16.jpg",
						title: "Trust in Nothing by Mar",
						type: "iframe",
						url: "http://m-a-r.bandcamp.com/album/trust-in-nothing"
					}
				],
				iframe: {
					loaded: false
				}
			}
		},
		methods: {
			load: function() {
				this.iframe.loaded = true;
			}
		}
	}

</script>