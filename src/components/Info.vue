<template>

	<main>

		<section class="about">

			<h2>About</h2>
			<div v-for="paragraph in paragraphs">
				<p v-html="paragraph.text"></p>
			</div>
			<br/>
			<h3>Members</h3>
			<div v-for="member in members">
				<p><a v-bind:href="member.link">{{ member.name }}</a></p>
			</div>

		</section>

		<section class="vendors">
			<h2>Vendors</h2>
			<ul>
				<li v-for="vendor in vendors">
					<a v-if="vendor.link" v-bind:href="vendor.link">{{ vendor.name }}</a>
					<span v-else>{{ vendor.name }}</span>
				</li>
			</ul>
		</section>

		<section>

			<h2>Contact</h2>
			<p>info at mar pvd dot com</p>
			<p>P.O. Box 23285, Providence RI 02903</p>

		</section>

		<footer>
			<em>last updated: <?php echo update('.'); ?></em>
			<a href="https://github.com/kangabell/mar">code: open source</a>
		</footer>

	</main>

</template>

<script>

	export default {

		data() {
			return {
				paragraphs: [
					{
						text: 'loud heavy noise as a vehicle for psychic survival.'
					},
					{
						text: '<em>(a doom/punk/sludge two-piece with lyrics about emotional trauma and recovery.)</em>'
					},
					{
						text: 'Read an interview with frontperson Kay at <a href="https://bostonhassle.com/focus-the-rage-an-interview-with-mar/">bostonhassle.com</a>.'
					},
					{
						text: 'Listen to a <a href="https://soundcloud.com/about45degrees/episode-2-kay-belardinelli">podcast interview with Kay</a>.'
					}
				],
				members: [
					{
						name: 'Kay Belardinelli',
						link: 'http://kaybelardinelli.com'
					},
					{
						name: 'Eir\u00EDkr \u00C5sheim',
						link: 'http://plastic-idolatry.com/erik/'
					}
				],
				vendors: [
					{
						name: 'Dead Tank Records',
						link: 'https://deadtankrecords.com/'
					},
					{
						name: 'Armageddon (BOS + PVD)',
						link: 'http://armageddonshop.com/'
					},
					{
						name: 'Analog Underground (PVD)'
					},
					{
						name: 'MRL (PVD)'
					},
					{
						name: 'Bandcamp',
						link: 'https://m-a-r.bandcamp.com'
					}
				]
			}
		},
	}

</script>