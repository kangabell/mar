<template>
<transition appear>

	<main>

		<section class="merch">

			<div v-for="product in products" class="product" v-bind:class="{ featured: product.featured }">

				<a v-bind:href="product.url" class="img"><img v-bind:src="product.img" v-bind:alt="product.title" /></a>
				<div class="text">
					<p class="title">{{ product.title }}</p>
					<p class="description" v-if="product.description">{{ product.description }}</p>
					<p class="price"><a v-bind:href="product.url">&#36;{{ product.price }}</a></p>
				</div>
					
			</div>

		</section>

		<div class="more">
			<a class="button" v-bind:href="merchURL">More Merch</a>
		</div>

	</main>

</transition>
</template>

<script>

	export default {
		data() {
			return {
				merchURL: 'https://m-a-r.bandcamp.com/merch/',
				products: [
					{
						title: 'T-Shirt',
						img: 'https://f4.bcbits.com/img/0010698788_36.jpg',
						url: 'https://m-a-r.bandcamp.com/merch/t-shirt',
						price: 10,
						featured: true,
						description: 'screenprinted by hand. (print quality varies slightly.)'
					},
					{
						title: '"Fill Your Lungs" Cassette',
						img: 'https://f4.bcbits.com/img/0010427896_36.jpg',
						url: 'https://m-a-r.bandcamp.com/album/fill-your-lungs',
						price: 2
					},
					{
						title: '"Trust in Nothing" Cassette',
						img: 'https://f4.bcbits.com/img/0008143194_36.jpg',
						url: 'https://m-a-r.bandcamp.com/album/trust-in-nothing',
						price: 5
					},
					{
						title: 'Patch',
						img: 'https://f4.bcbits.com/img/0010527769_36.jpg',
						url: 'https://m-a-r.bandcamp.com/merch/patch',
						price: 2,
						featured: true,
						description: 'Silkscreen patch. Handmade – print quality varies. material may also vary slightly.'
					},
					{
						title: '"Murmurs, Chants, and Screams" VolI',
						img: 'https://f4.bcbits.com/img/0008149951_36.jpg',
						url: 'https://m-a-r.bandcamp.com/merch/murmurs-chants-and-screams-zine',
						price: 2
					},
					{
						title: '"Murmurs, Chants, and Screams" VolII',
						img: 'https://f4.bcbits.com/img/0011503215_36.jpg',
						url: 'https://m-a-r.bandcamp.com/merch/murmurs-chants-and-screams-vol-ii',
						price: 3
					}
				]
			}
		}
	}

</script>