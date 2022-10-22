<template>
<transition appear>

	<main>

		<figure>
			<img src="@/assets/img/media/mar-sheerqueer_burnt.jpg" />
			<figcaption>Mar at Sheer Queer Fest (Boston) in 2018</figcaption>
		</figure>

		<figure>
			<video width="100%" controls poster="" class="video" ref="video">
				<source src="@/assets/img/media/mar-onenight.mp4" type="video/mp4">
				<p>Sorry, your browser does not support the video tag.</p>
			</video>
			<figcaption>Mar at Psychic Readings (Providence) in 2017</figcaption>
		</figure>

		<figure>
			<img src="@/assets/img/media/hassle.jpg" />
			<figcaption>Mar at Hassle Fest (Boston) in 2017</figcaption>
		</figure>

		<figure>
			<div class="flex-container">
				<img src="@/assets/img/media/marblackblackoct22-1.png" />
				<img src="@/assets/img/media/marblackblackoct22-2.png" />
				<img src="@/assets/img/media/mar-blacklace-more-1.jpg" />
				<img src="@/assets/img/media/mar-blacklace-more-2.jpg" />
			</div>
			<figcaption>Mar at AS220's Black Box Theater (Providence) in 2022</figcaption>
		</figure>

		<figure>
			<img src="@/assets/img/media/mwm.jpg" />
			<figcaption>Mar at Machines with Magnets (Providence) in 2017</figcaption>
		</figure>

		<figure>
			<img src="@/assets/img/media/mar-pals.jpg" />
			<figcaption>Kay &amp; Eiríkr</figcaption>
		</figure>

	</main>

</transition>
</template>

<script>

	export default {
		name: "VideoPlayer",
		computed: {
			videoElement () {
				return this.$refs.video;
			}, 
		}
	}

</script>