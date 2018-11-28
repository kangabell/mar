<template>
<transition appear>

	<main>

		<section class="contact" itemscope itemtype="http://schema.org/MusicGroup">

			<h2>Contact</h2>
			<p itemprop="email">{{ info.email }}</p>
			<p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
				<span class="address" itemprop="streetAddress">{{ info.address }}</span><br/>
				<span class="city" itemprop="addressLocality">{{ info.city }}</span>
				<span class="state" itemprop="addressRegion">{{ info.state }}</span>
				<span class="zip" itemprop="postalCode">{{ info.zip }}</span>
			</p>
			<p><a class="bandcamp img" v-bind:href="info.bandcampURL"><span class="icon"></span> <span class="text">bandcamp</span></a></p>

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

		<section>
			<p class="small">this site is <a href="https://github.com/kangabell/mar">open source</a>, made by kay.</p>
		</section>

	</main>

</transition>
</template>

<script>

	import {db} from '../firebase';
	import _ from 'lodash'
	import moment from 'moment'
	

	export default {
		data() {
			return {
				paragraphs: {},
				articles: {},
				members: {},
				vendors: {},
				info: {},
				announcements: {},
				shows: {}
			}
		},
		firebase: {
			paragraphs: {
				source: db.ref('paragraphs'),
			},
			articles: {
				source: db.ref('articles'),
			},
			members: {
				source: db.ref('members'),
			},
			vendors: {
				source: db.ref('vendors'),
			},
			info: {
				source: db.ref('info'),
				asObject: true
			},
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