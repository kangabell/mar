<template>
<transition appear>

	<main>

		<section class="shows">
			<h2>Upcoming Shows</h2>
			<ul>
				<div class="loading" v-if="!shows.length"></div>
				<li v-for="show in chronShows" v-if="show.archive === false">
					<strong>
						<span v-if="show.dateEnd">
							{{ show.date | formatDateShort }} &#45; {{ show.dateEnd | formatDate }}
						</span>
						<span v-else>
							{{ show.date | formatDate }}
						</span>
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

			<div class="loading" v-if="!shows.length"></div>
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
