<template>

	<main>

		<section class="merch">

			<div v-for="product in products">

				<a v-bind:href="product.url" class="img"><img v-bind:src="product.img" v-bind:alt="product.title" /></a>
				<p class="title">{{ product.title }}</p>
				<p class="price"><a v-bind:href="product.url" class="button">&#36;{{ product.price }}</a></p>
					
			</div>

		</section>

	</main>

</template>

<script>

	export default {
		data() {
			return {
				products: [
					{
						title: 'Demo Cassette',
						img: 'https://f4.bcbits.com/img/0009962451_37.jpg',
						url: 'https://m-a-r.bandcamp.com/album/demo',
						price: '2'
					},
					{
						title: 'Fill Your Lungs Cassette',
						img: 'https://f4.bcbits.com/img/0010427896_37.jpg',
						url: 'https://m-a-r.bandcamp.com/album/fill-your-lungs',
						price: '2'
					},
					{
						title: 'Patch',
						img: 'https://f4.bcbits.com/img/0010527769_37.jpg',
						url: 'https://m-a-r.bandcamp.com/merch/patch',
						price: '2'
					},
					{
						title: '"Murmurs..." VolI Zine',
						img: 'https://f4.bcbits.com/img/0008143325_37.jpg',
						url: 'https://m-a-r.bandcamp.com/merch/murmurs-chants-and-screams-zine',
						price: '2'
					}

				]
			}
		}
	}

</script>