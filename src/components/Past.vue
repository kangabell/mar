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

			<p v-for="event in orderedEvents" v-if="event.archive !== false">
				<strong>{{ event.date | formatDate }}</strong> &#151; w/ 
				<span v-if="event.bands" v-for="(band, index) in event.bands">{{ band.name }}<span v-if="index+1 < event.bands.length">, </span></span> <!-- comma-separated list of bands -->
				@ {{ event.location }}
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
				events: {}
			}
		},
		firebase: {
			releases: {
				source: db.ref('releases'),
			},
			events: {
				source: db.ref('events'),
			}
		},
		computed: {
		  orderedEvents: function () {
		    return _.orderBy(this.events, 'date').reverse();
		  }
		},
		filters: {
			formatDate: function(value) {
				if (value) return moment(String(value)).format('MMMM D YYYY')
		  	}
		}

	}

</script>