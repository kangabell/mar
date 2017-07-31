<template>

	<main>

		<section>

			<h2>Releases</h2>
			<ul class="bulleted">
				<li v-for="release in releases">
					<a v-bind:href="release.url">{{ release.name }}</a> <em>{{ release.date }}</em>
				</li>
			</ul>
		</section>

		<section>

			<h2>Past Shows</h2>

			<p v-for="show in shows">
				<strong>{{ show.date }}</strong> &#151; w/ {{ show.bands }} @ {{ show.location }}
			</p>

		</section>

	</main>

</template>

<script>

	export default {

		data() {
			return {
				releases: [
					{
						name: 'Fill Your Lungs',
						url: 'https://m-a-r.bandcamp.com/album/fill-your-lungs',
						date: '2017'
					},
					{
						name: 'Trust in Nothing',
						url: 'https://m-a-r.bandcamp.com/album/trust-in-nothing',
						date: '2016'
					},
					{
						name: 'Demo',
						url: 'https://m-a-r.bandcamp.com/album/demo',
						date: '2015'
					}
				],
				shows: [

					{
						date: 'July 19 2017',
						bands: 'Xylitol, Dau\u00F0yflin, Patsy, Sap',
						location: 'Psychic Readings, Providence RI'
					},
					{
						date: 'July 1 2017',
						bands: 'Think Tank, Perennial, Milky Wimpshake, Electric Mail Myself To Thoreau',
						location: 'Gold Spring Hollow (Belchertown MA)'
					},
					{
						date: 'July 1 2017',
						bands: 'Thou, Cloudrat, Moloch',
						location: 'Aurora (Providence RI)'
					},
					{
						date: 'June 30 2017',
						bands: 'Think Tank, Donor, Blind Raftery',
						location: 'Overlook Hotel (Philadelphia PA)'
					},
					{
						date: 'June 29 2017',
						bands: 'Think Tank, Big Bliss, Dog Shepherd',
						location: 'Trans-Pecos (Queens NY)'
					},
					{
						date: 'June 28 2017',
						bands: 'Think Tank, Opening Bell, Exposed as Rot',
						location: 'Osborn House (New Haven CT)'
					},
					{
						date: 'May 26 2017',
						bands: 'visibilities, Suicide Magnets, Caroline Park',
						location: 'Psychic Readings (Providence, RI)'
					},
					{
						date: 'March 11 2017',
						bands: 'Think Tank, The Oracle',
						location: 'Machines With Magnets (Pawtucket, RI)'
					},
					{
						date: 'March 5 2017',
						bands: 'Davidians, N.E.G., Penetrode',
						location: 'LAVA (Philadelphia, PA)'
					},
					{
						date: 'March 3 2017',
						bands: 'Northern Liberties, Hulk Smash',
						location: 'Sound Hole (Philadelphia, PA)'
					},
					{
						date: 'February 1 2017',
						bands: 'Occult Blood, Flinstones, Double Dragon',
						location: 'Machines With Magnets (Pawtucket, RI)'
					},
					{
						date: 'October 21 2016',
						bands: 'Empty Grows Every Bed, Mary Burke',
						location: 'Psychic Readings (Providence, RI)'
					},
					{
						date: 'April 16 2016',
						bands: 'Mossy Fiber, Nan Dejour, Sultanique',
						location: '52 Chapped Lips (Providence, RI)'
					},
					{
						date: 'July 12 2015',
						bands: 'Rectrix, PWR RTLZ',
						location: 'Red Room (Providence, RI)'
					},
					{
						date: 'May 5 2015',
						bands: 'Börn, Vitka, Pvblic Bath',
						location: 'Red Room (Providence, RI)'
					}
				],

			}
		},
	}

</script>