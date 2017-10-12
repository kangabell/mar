<template>
<transition appear>

	<main>

		<section class="contact" itemscope itemtype="http://schema.org/MusicGroup">

			<h2>Contact</h2>
			<p itemprop="email">{{ contact.email }}</p>
			<p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
				<span class="address" itemprop="streetAddress">{{ contact.address }}</span><br/>
				<span class="city" itemprop="addressLocality">{{ contact.city }}</span>
				<span class="state" itemprop="addressRegion">{{ contact.state }}</span>
				<span class="zip" itemprop="postalCode">{{ contact.zip }}</span>
			</p>
			<p><a class="bandcamp img" href="https://m-a-r.bandcamp.com/"><span class="icon"></span> <span class="text">bandcamp</span></a></p>
			<p class="small">this site is <a href="https://github.com/kangabell/mar">open source</a>.</p>

		</section>

	</main>

</transition>
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
				asObject: true
			}
		}
	}

</script>