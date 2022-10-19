<template>
<transition appear>

	<main>

		<section class="merch">

			<div class="loading" v-if="!products.length"></div>

			<a v-else v-for="product in products" class="product" v-bind:class="{ featured: product.featured }" v-bind:href="buildURL(product)">

				<div class="img">
					<img v-bind:src="product.img" v-bind:alt="product.title" />
				</div>
				<div class="text">
					<h2 class="title">{{ product.title }}</h2>
					<p class="description" v-if="product.description">{{ product.description }}</p>
					<p class="price">&#36;{{ product.price }}</p>
				</div>
					
			</a>

		</section>

		<div class="more">
			<a class="button" v-bind:href="info.bandcampURL + '/merch'">More Merch</a>
		</div>

	</main>

</transition>
</template>

<script>

	export default {
		data() {
			return {
				products: [
					{
					  "description": "booklet of lyrics from the album “Everything is Alive”, with ten all-black matches.",
					  "featured": true,
					  "img": "https://f4.bcbits.com/img/0030069628_10.jpg",
					  "price": 18,
					  "slug": "lyric-booklet-and-matches",
					  "title": "Lyric Booklet and Matches",
					  "type": "merch"
					},
					{
					  "description": "soft cotton shirt with Pressed in the Earth cover art. sizes xs-xxl.",
					  "featured": true,
					  "img": "https://f4.bcbits.com/img/0016726948_10.jpg",
					  "price": 12,
					  "slug": "calendula-t-shirt",
					  "title": "Calendula Shirt",
					  "type": "merch"
					},
					{
					  "description": "'THE MAN SHALL BE JUDGED' incantation by Kay Belardinelli, ~5x7 inches, limited edition.",
					  "img": "https://f4.bcbits.com/img/0015337051_10.jpg",
					  "price": 12,
					  "slug": "the-man-shall-be-judged-incantation-print",
					  "title": "Print",
					  "type": "merch"
					},
					{
					  "img": "https://f4.bcbits.com/img/0016062921_10.jpg",
					  "price": 8,
					  "slug": "fill-your-lungs",
					  "title": "'Fill Your Lungs' Cassette",
					  "type": "album"
					},
					{
					  "description": "screenprinted by hand. (print quality varies slightly.)",
					  "featured": true,
					  "img": "https://f4.bcbits.com/img/0011520567_36.jpg",
					  "price": 10,
					  "slug": "t-shirt",
					  "title": "FYL Shirt",
					  "type": "merch"
					},
					{
					  "img": "https://f4.bcbits.com/img/0008149951_36.jpg",
					  "price": 2,
					  "slug": "murmurs-chants-and-screams-zine",
					  "title": "'Murmurs, Chants, and Screams' VolI",
					  "type": "merch"
					},
					{
					  description: "Silkscreen patch. Handmade – print quality varies. material may also vary slightly.",
					  img: "https://f4.bcbits.com/img/0010527769_36.jpg",
					  price: 1,
					  slug: "patch",
					  title: "Patch",
					  type: "merch"
					}
				],
				info: {}
			}
		},
		methods: {
			buildURL: function(product) {
				return this.info.bandcampURL + '/' + product.type + '/' + product.slug		
			}
		}
	}

</script>