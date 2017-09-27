<template>

	<main>

		<section class="contact">

			<h2>Contact</h2>
			<p>{{ contact[2].value }}</p>
			<p>
				<span class="address">{{ contact[0].value }}</span><br/>
				<span class="city">{{ contact[1].value }}</span>
				<span class="state">{{ contact[3].value }}</span>
				<span class="zip">{{ contact[4].value }}</span>
			</p>
			<p><a class="bandcamp img" href="https://m-a-r.bandcamp.com/"><span class="icon"></span> <span class="text">bandcamp</span></a></p>
			<p class="small">this site is <a href="https://github.com/kangabell/mar">open source</a>.</p>

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