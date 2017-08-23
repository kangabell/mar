<template>

	<main>

		<h2>Add New Show</h2>

		<section>

			<form>

				<div>
					<label for="date">Date *</label>
					<input v-model="show.date" type="date" id="date" />
				</div>

				<div>
					<label for="location">Location *</label>
					<input v-model="show.location" type="text" />
				</div>

				<div class="band" v-for="band in bands">
					<div>
						<label for="bname">Band Name</label>
						<input v-model="band.name" type="text" id="bname" />
					</div>
					<div>
						<label for="burl">Band URL</label>
						<input v-model="band.url" type="url" id="burl" />
					</div>
					<a class="button add" @click="add">+</a>
				</div>

				<a class="button" v-on:click="addShow">Add Show</a>

			</form>

			

			<p><pre>data: {{ $data }}</pre></p>

		</section>

	</main>

</template>

<script>

	import {db} from '../firebase'

	export default {
		data() {
			return {
				show: {
					date: "",
					location: "",
					band: {
						name: "",
						url: ""
					}
				},
			    bands: [{
			      count: 0
			    }],
			    count: 0
			}
		  },
		  firebase: {
		    shows: db.ref('shows')
		  },
		  methods: {
		    add: function() {
		      this.bands.push({
		        count: ++this.count
		      });
		    },
		    addShow: function(){
		    	this.$firebaseRefs.shows.push({
		    		date: this.show.date,
		    		location: this.show.location
		    	})
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