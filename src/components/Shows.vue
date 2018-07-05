<template>
<transition appear>

	<main>

		<section class="shows">
			<h2>Upcoming Shows</h2>
			<ul>
				<li v-for="show in chronShows" v-if="show.archive === false">
					<strong>
						{{ formatDates(show.date, show.dateEnd) }}
					</strong>
					<span v-if="show.note" class="note">{{ show.note }}</span>
					<span class="location">{{ show.location }}</span>
					<span v-if="show.bands" v-for="(band, index) in show.bands" class="band">
						<a v-if="band.url" v-bind:href="band.url">{{ band.name }}</a><span v-else>{{ band.name }}</span><span v-if="index+1 < show.bands.length">, </span>
					</span>
				</li>
			</ul>
		</section>

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
		methods: {
			formatDates(start, end) {
				if (!start) return '';
				if (!end) return formatDate(start);
				const d1 = moment(String(start));
				const d2 = moment(String(end));
				let prefix;
				let suffix;
				if (d2.year !== d1.year) {
					prefix = d1.format('MMMM D YYYY');
					suffix = d2.format('MMMM D YYYY');
				} else {
					prefix = d1.format('MMMM D');
					suffix = d2.format(d2.month !== d1.month ? 'MMMM D YYYY' : 'D YYYY');
				}
				return prefix + " &#45 " + suffix;
			}
		},
		filters: {
			formatDate: function(value) {
				if (value) return moment(String(value)).format('MMMM D YYYY')
			}
		}
	}

</script>
