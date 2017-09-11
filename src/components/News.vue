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
				<li v-for="event in orderedEvents" v-if="event.archive === false">
					<strong>{{ event.date | formatDate }}</strong>
					<span v-if="event.bands" v-for="band in event.bands">
						<a v-if="band.url" v-bind:href="band.url">{{ band.name }}</a>
					</span>
					<span>{{ event.location }}</span>
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
				events: {}
			}
		},
		firebase: {
			announcements: {
				source: db.ref('announcements'),
			},
			events: {
				source: db.ref('events'),
			}
		},
		computed: {
		  orderedEvents: function () {
		    return _.orderBy(this.events, 'date')
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