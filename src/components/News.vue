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
				<li v-for="show in orderedShows" v-if="show.archive === false">
					<strong>{{ show.date | formatDate }}</strong>
					<span v-if="show.bands" v-for="(band, index) in show.bands" class="band">
						<a v-if="band.url" v-bind:href="band.url">{{ band.name }}</a><span v-else>{{ band.name }}</span><span v-if="index+1 < show.bands.length">, </span>
					</span>
					<span class="location">{{ show.location }}</span>
				</li>
			</ul>
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