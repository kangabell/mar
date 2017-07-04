<?php include ('partials/header.php'); ?>


<section class="announcement">
	<div class="wrapper" v-for="announcement in announcements">
		<p>{{ announcement.subtitle }}</p>
		<h2>{{ announcement.title }}</h2>
		<p v-html="announcement.content"></p>
	</div>
</section>

<section class="shows">
	<h2>Upcoming Shows</h2>
	<p>
		<strong>July 19 2017</strong><br/>
		<a href="https://xylitolband.bandcamp.com/">Xylitol</a>, <a href="https://daudyflin.bandcamp.com/">Dau&#240;yflin</a>, <a href="https://itspatsy.bandcamp.com/album/demo">Patsy</a>, Sap<br/>
		Psychic Readings, Providence RI
	</p>
	<p>
		<strong>August 4 2017</strong><br/>
		Funky Jungle, Providence RI
	</p>
	<p>
		<strong>October 28 2017</strong><br/>
		<a href="https://heavysea.bandcamp.com/">SEA</a>, <a href="https://preen.bandcamp.com/">Preen</a><br/>
		Boston MA
	</p>
</section>

<?php include ('partials/footer.php'); ?>