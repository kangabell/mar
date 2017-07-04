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
	<ul>
		<li v-for="show in shows">
			<strong>{{ show.date }}</strong>
			<span v-if="show.bands" v-html="show.bands"></span>
			<span>{{ show.location }}</span>
		</li>
	</ul>
</section>

<?php include ('partials/footer.php'); ?>