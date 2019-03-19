<template>
<transition appear>

	<main>

		<section class="merch">

			<a v-for="product in products" class="product" v-bind:class="{ featured: product.featured }" v-bind:href="buildURL(product)">

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

	import {db} from '../firebase';

	export default {
		data() {
			return {
				products: {},
				info: {}
			}
		},
		firebase: {
			products: {
				source: db.ref('products')
			},
			info: {
				source: db.ref('info'),
				asObject: true
			}
		},
		methods: {
			buildURL: function(product) {
				return this.info.bandcampURL + '/' + product.type + '/' + product.slug		
			}
		}
	}

</script>