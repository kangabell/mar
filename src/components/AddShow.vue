<template>

	<main>

		<section v-if="!submitted">

			<h2>Add New Show</h2>

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

				<p><pre>data: {{ $data }}</pre></p>

			</form>

		</section>

		<div v-if="submitted">
			<h2>Show Submitted</h2>
			<p>Thank you.</p>
		</div>

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
			    count: 0,
			    submitted: false
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
		    		location: this.show.location,
		    		// bands: this.show.bands
		    		
		    	}).then( this.submitted = true )
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