<template>

	<main>

		<section class="announcement">
			<div class="wrapper" v-for="announcement in announcements">
				<p v-if="announcement.subtitle">{{ announcement.subtitle }}</p>
				<h2 v-if="announcement.title">{{ announcement.title }}</h2>
				<p v-html="announcement.content"></p>
			</div>
		</section>

		<section class="shows">
			<h2>Upcoming Shows</h2>
			<ul>
				<li v-for="show in shows">
					<strong>{{ show.date }}</strong>
					<span v-if="show.bands" v-html="show.bands"></span>
					<span>{{ show.location }}</span>
				</li>
			</ul>
		</section>

	</main>

</template>

<script>

	export default {

		data() {
			return {
				announcements: [
					{
						content: '<video controls="" style="width:100%; max-width:500px"><source src="assets/img/loveconquersall.mp4" type="video/mp4"></video><p style="margin-top:0"><a href="https://www.instagram.com/p/BWwkNarD4BX/">video by Front Row Poster</a></p>'
					}
				],
				shows: [
					{
						date: 'August 4 2017',
						bands: '<a href="http://sunrot.bandcamp.com/">Sunrot</a>, <a href="http://godroot.bandcamp.com/">Godroot</a>, Black Phillip',
						location: 'Funky Jungle, Providence RI'
					},
					{
						date: 'October 28 2017',
						bands: '<a href="https://heavysea.bandcamp.com/">SEA</a>, <a href="https://preen.bandcamp.com/">Preen</a>',
						location: 'Boston MA'
					}
				],

			}
		},
	}

</script>

<style>

	main {
		padding-top: 0;
	}

</style>