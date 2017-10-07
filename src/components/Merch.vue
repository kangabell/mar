<template>

	<main>

		<section class="merch">

			<div v-for="product in products" class="col">

				<a v-bind:href="product.url" class="img"><img v-bind:src="product.img" v-bind:alt="product.title" /></a>
				<p class="title">{{ product.title }}</p>
				<p class="price"><a v-bind:href="product.url" class="button">&#36;{{ product.price }}</a></p>
					
			</div>

		</section>

	</main>

</template>

<script>

	import axios from 'axios'
	import VueAxios from 'vue-axios'

	export default {
		data() {
			return {
				status: '',
				products: [
					{
						title: 'Demo Cassette',
						img: 'https://f4.bcbits.com/img/0009962451_37.jpg',
						url: 'https://m-a-r.bandcamp.com/album/demo',
						price: 2
					},
					{
						title: 'Fill Your Lungs Cassette',
						img: 'https://f4.bcbits.com/img/0010427896_37.jpg',
						url: 'https://m-a-r.bandcamp.com/album/fill-your-lungs',
						price: 2
					},
					{
						title: 'Patch',
						img: 'https://f4.bcbits.com/img/0010527769_37.jpg',
						url: 'https://m-a-r.bandcamp.com/merch/patch',
						price: 2
					},
					{
						title: '"Murmurs..." VolI Zine',
						img: 'https://f4.bcbits.com/img/0008143325_37.jpg',
						url: 'https://m-a-r.bandcamp.com/merch/murmurs-chants-and-screams-zine',
						price: 2
					},
					{
						title: 'Trust in Nothing Cassette',
						img: 'https://f4.bcbits.com/img/0008143194_37.jpg',
						url: 'https://m-a-r.bandcamp.com/album/trust-in-nothing',
						price: 5
					},
					{
						title: 'Cassette and Zine',
						img: 'https://f4.bcbits.com/img/0008145430_37.jpg',
						url: 'https://m-a-r.bandcamp.com/merch/cassette-tape-zine',
						price: 6
					},
					{
						title: 'T-Shirt',
						img: 'https://f4.bcbits.com/img/0010698788_37.jpg',
						url: 'https://m-a-r.bandcamp.com/merch/t-shirt',
						price: 10
					}

				]
			}
		},
		created: function() {
			this.loadMerch();
		},
		methods: {

			// we need to use the client secret here. i think this should not be sent
			// to people accessing our website. will vue keep this server-side?
			//
			// reponse to this will be:
			//
			//   {access_token: --, expires_in: 3600, refresh_token: --, ok: true, token_type: bearer}
			//
			// we need to save access_token (and probably everything else too).
			// access_tokens have to be refreshed every hour (every 3600 seconds).
			getToken: function() {
				axios({
				  method: 'post',
				  url: 'https://bandcamp.com/oauth_token',
				  data: {
				    grant_type: 'client_credentials',
				    client_id: 114,
				    client_secret: client_secret /* fixme */
				  }
				});
			},

			// before calling this, we need to set up or pass in an access_token somehow.
			// this will look like "3382694905.114.1507268915.OxDdAp6xxlH93XGHmZLbZDxqIlg="
			// and we get one from 'getToken'. we will have to get (or refresh) this token
			// at least once an hour.
			loadMerch: function() {
				axios({
				  method: 'post',
				  url: 'https://bandcamp.com/api/merchorders/1/get_merch_details',
				  headers: {
				    Authorization: 'Bearer ' + access_token /* fixme */
				  }
				  data: {
				    band_id: 2352218958,
				    start_time: "2015-01-01"
				  }
				});
			}
			
		}
	};

</script>