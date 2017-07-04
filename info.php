<?php include ('partials/header.php'); ?>

<section class="about">

	<h2>About</h2>
	<div v-for="paragraph in paragraphs">
		<p v-html="paragraph.text"></p>
	</div>
	<br/>
	<h3>Members</h3>
	<div v-for="member in members">
		<p><a v-bind:href="member.link">{{ member.name }}</a></p>
	</div>

</section>

<section class="vendors">
	<h2>Vendors</h2>
	<p v-for="vendor in vendors">
		<a v-if="vendor.link" v-bind:href="vendor.link">{{ vendor.name }}</a>
		<span v-else>{{ vendor.name }}</span>
	</p>
</section>

<section>

	<h2>Contact</h2>
	<p>info at mar pvd dot com</p>
	<p>P.O. Box 23285, Providence RI 02903</p>

</section>

<footer>
	<em>last updated: <?php echo update('.'); ?></em>
	<a href="https://github.com/kangabell/mar">code: open source</a>
</footer>

<?php include ('partials/footer.php'); ?>