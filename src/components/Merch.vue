<template>
<transition appear>

	<main>

		<section class="merch">

			<div v-for="product in products" class="product" v-bind:class="{ featured: product.featured }">

				<a v-bind:href="info.bandcampURL + product.path" class="img"><img v-bind:src="product.img" v-bind:alt="product.title" /></a>
				<div class="text">
					<p class="title">{{ product.title }}</p>
					<p class="description" v-if="product.description">{{ product.description }}</p>
					<p class="price"><a v-bind:href="info.bandcampURL + product.path">&#36;{{ product.price }}</a></p>
				</div>
					
			</div>

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
		}
	}

</script>