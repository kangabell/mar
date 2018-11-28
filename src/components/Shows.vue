<template>
<transition appear>

	<main>

		<section>

			<h2>Past Shows</h2>

			<p v-for="show in reverseChronShows" v-if="show.archive !== false">
				<strong>{{ show.date | formatDate }}</strong> &#151; 
				<span v-if="show.note">{{ show.note }}</span>
				<span v-else>
					<span v-if="show.bands" v-for="(band, index) in show.bands">{{ band.name }}<span v-if="index+1 < show.bands.length">, </span></span> <!-- comma-separated list of bands -->
				</span>
				@ {{ show.location }}
			</p>
		</section>

	</main>

</transition>
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
		  chronShows: function () {
		    return _.orderBy(this.shows, 'date')
		  },
		  reverseChronShows: function () {
		    return _.orderBy(this.shows, 'date').reverse();
		  }
		},
		filters: {
			formatDate: function(value) {
				if (value) return moment(String(value)).format('MMMM D YYYY')
			},
			formatDateShort: function(value) {
				if (value) return moment(String(value)).format('MMMM D')
			}
		}
	}

</script>
