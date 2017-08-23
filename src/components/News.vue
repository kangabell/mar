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
					<strong>{{ show.date }}</strong>
					<span v-if="show.bands" v-for="band in show.bands">
						<a v-if="band.url" v-bind:href="band.url">{{ band.name }}</a>
					</span>
					<span>{{ show.location }}</span>
				</li>
			</ul>
		</section>

	</main>

</template>

<script>
	  
	import {db} from '../firebase';
	import _ from 'lodash';
	
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
		}
	}

</script>

<style>

	main {
		padding-top: 0;
	}

</style>