<template>

	<main>

		<section class="shows">
			<h2>Upcoming Shows</h2>
			<ul>
				<li v-for="show in orderedShows" v-if="show.archive === false">
					<strong>{{ show.date | formatDate }}</strong>
					<span v-if="show.note" class="note">{{ show.note }}</span>
					<span v-if="show.bands" v-for="(band, index) in show.bands" class="band">
						<a v-if="band.url" v-bind:href="band.url">{{ band.name }}</a><span v-else>{{ band.name }}</span><span v-if="index+1 < show.bands.length">, </span>
					</span>
					<span class="location">{{ show.location }}</span>
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
				announcements: {},
				shows: {}
			}
		},
		firebase: {
			announcements: {
				source: db.ref('announcements'),
			},
			shows: {
				source: db.ref('shows'),
			}
		},
		computed: {
		  orderedShows: function () {
		    return _.orderBy(this.shows, 'date')
		  }
		},
		filters: {
			formatDate: function(value) {
				if (value) return moment(String(value)).format('MMMM D YYYY')
		  	}
		}
	}

</script>

<style>

	main {
		padding-top: 0;
	}

</style>