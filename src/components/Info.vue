<template>
<transition appear>

	<main>

		<section class="contact" itemscope itemtype="http://schema.org/MusicGroup">

			<div class="loading" v-if="!info.address"></div>
			<div v-else>
				<h2>About</h2>
				<div v-for="paragraph in paragraphs">
					<p v-html="paragraph.text"></p>
				</div>
				<p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
					<span class="address" itemprop="streetAddress">{{ info.address }}</span>
					<span class="city" itemprop="addressLocality">{{ info.city }}</span>
					<span class="state" itemprop="addressRegion">{{ info.state }}</span>
					<span class="zip" itemprop="postalCode">{{ info.zip }}</span>
				</p>
				<p itemprop="email">{{ info.email }}</p>
				<p><a class="bandcamp img" v-bind:href="info.bandcampURL"><span class="icon"></span> <span class="text">bandcamp</span></a></p>
			</div>
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
				info: {}
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
			}
		}
	}

</script>