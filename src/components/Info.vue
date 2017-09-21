<template>

	<main>

		<section>

			<h2>Contact</h2>
			<p>{{ email }}</p>
			<p>
				<span class="address">{{ address }}</span><br/>
				<span class="city">{{ city }}</span>
				<span class="state">{{ state }}</span>
				<span class="zip">{{ zip }}</span>
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

		// data: {
		// 		contact: {

		// 			email: 'info (at) marpvd (com)',
		// 			address: 'P.O. Box 23285',
		// 			city: 'Providence',
		// 			state: 'RI',
		// 			zip: '02903'
		// 		},
		//   },

		data() {
			return {
				paragraphs: {},
				articles: {},
				members: {},
				vendors: {},
				// contact: {

					email: 'info (at) marpvd (com)',
					address: 'P.O. Box 23285',
					city: 'Providence',
					state: 'RI',
					zip: '02903'
				// }
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