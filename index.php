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
	<div v-for="show in shows">
		<h3>{{ show.date }}</h3>
		<p v-if="show.bands" v-html="show.bands"></p>
		<p>{{ show.location }}</p>
	</div>
</section>

<?php include ('partials/footer.php'); ?>