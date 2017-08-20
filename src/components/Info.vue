<template>

	<main>

		<section class="about">

			<h2>About</h2>
			<div v-for="paragraph in paragraphs">
				<p v-html="paragraph.text"></p>
			</div>

			<br/>

			<h3>Press</h3>
			<div v-for="article in articles">
				<p><a v-bind:href="article.link">{{ article.title }}</a></p>
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
			<div v-for="contact in contacts">
				<p>{{ contact.info }}</p>
			</div>

		</section>

		<footer>
			<a href="https://github.com/kangabell/mar">code: open source</a>
		</footer>

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
				contacts: {}
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
			contacts: {
				source: db.ref('contacts'),
			}
		}
	}

</script>