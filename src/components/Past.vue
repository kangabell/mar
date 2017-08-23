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

			<p v-for="show in orderedShows" v-if="show.archive !== false">
				<strong>{{ show.date | formatDate }}</strong> &#151; w/ 
				<span v-if="show.bands" v-for="(band, index) in show.bands">{{ band.name }}<span v-if="index+1 < show.bands.length">, </span></span> <!-- comma-separated list of bands -->
				@ {{ show.location }}
			</p>
		</section>

	</main>

</template>

<script>

	import {db} from '../firebase'
	import _ from 'lodash'
	import moment from 'moment'

	

	export default {

		data() {
			return {
				releases: {},
				shows: {}
			}
		},
		firebase: {
			releases: {
				source: db.ref('releases'),
			},
			shows: {
				source: db.ref('shows'),
			}
		},
		computed: {
		  orderedShows: function () {
		    return _.orderBy(this.shows, 'date').reverse();
		  }
		},
		filters: {
			formatDate: function(value) {
				if (value) return moment(String(value)).format('MMMM D YYYY')
		  	}
		}

	}

</script>