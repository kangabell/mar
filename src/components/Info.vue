<template>

	<main>

		<section>

			<h2>Contact</h2>
			<p>{{ contact[2].value }}</p>
			<p>
				<span class="address">{{ contact[0].value }}</span><br/>
				<span class="city">{{ contact[1].value }}</span>
				<span class="state">{{ contact[3].value }}</span>
				<span class="zip">{{ contact[4].value }}</span>
			</p>
			<p><a href="https://m-a-r.bandcamp.com/" class="img bandcamp"><img src="img/bandcamp.png" alt="Bandcamp logo" />bandcamp</a></p>
			<p>No, we are not on any "social media".</p>
			<p>In case you were wondering, this website was made by <a href="http://kangabell.com">Kay</a>, and <a href="https://github.com/kangabell/mar">the code is open source</a>.</p>
			
		</section>

	</main>

</template>

<script>

	import {db} from '../firebase';

	export default {
		data() {
			return {
				paragraphs: {},
				articles: {},
				members: {},
				vendors: {},
				contact: {}
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
			contact: {
				source: db.ref('contact'),
			}
		}
	}

</script>