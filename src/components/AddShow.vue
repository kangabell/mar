<template>

	<main>

		<h2>Add New Show</h2>

		<section>

			<div>
				<label for="date">Date *</label>
				<input type="date" id="date" />
			</div>

			<div>
				<label for="location">Location *</label>
				<input type="text" />
			</div>

			<div class="band" v-for="band in bands">
				<div>
					<label for="bname">Band Name</label>
					<input type="text" id="bname" />
				</div>
				<div>
					<label for="burl">Band URL</label>
					<input type="url" id="burl" />
				</div>
				<a class="button add" @click="add">+</a>
			</div>

			<a class="button">Add Show</a>

		</section>

	</main>

</template>

<script>

	export default {
		data() {
			return {
			    bands: [{
			      count: 0
			    }],
			    count: 0
			}
		  },

		  methods: {
		    add: function() {
		      this.bands.push({
		        count: ++this.count
		      });
		    }
		  }
	}

</script>

<style>

	section {
		text-align: left;
	}

	label {
		display: block;
		margin-top: 1rem;
	}

	.band {
		clear: both;
	}
	.band:after {
		content: '';
		display: table;
		clear: both;
	}

	.band div {
		float: left;
		padding-right: 1rem;
		width: 40%;
	}
	.band input {
		width: 100%;
	}

	.button {
		background: #6e9eb1;
		border: none;
		color: white;
		display: inline-block;
		margin-top: 1rem;
		padding: 0.25em 1em;
	}

	.button:hover {
		cursor: pointer;
	}

	.button.add {
		display: none;
	}

	.band:last-of-type .button.add {
		display: block;
		float: right;
		margin-top: 2rem;
	}

</style>