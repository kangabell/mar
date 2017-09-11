<template>

	<main>

		<section v-if="!submitted">

			<h2>Add New Event</h2>

			<form @submit.prevent="submit">

				<div>
					<label for="date">Date *</label>
					<input v-model="event.date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('date') }" data-vv-delay="1000" placeholder="YYYY/DD/MM" type="text" name="date" />
					<span v-show="errors.has('date')" class="is-danger">{{ errors.first('date') }}</span>
				</div>

				<div>
					<label for="location">Location *</label>
					<input v-model="event.location" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('location') }" data-vv-delay="1000" type="text" name="location" />
					<span v-show="errors.has('location')" class="help is-danger">{{ errors.first('location') }}</span>
				</div>

				<div class="bands">
					<div class="band" v-for="band in event.bands">
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
				</div>

				<div>* <em>required</em></div>

				<button class="button" type="submit">Add Event</button>

			</form>

		</section>

		<div v-if="submitted">
			<h2>Event Submitted</h2>
			<p>Thank you.</p>
		</div>

	</main>

</template>

<script>

	import {db} from '../firebase'

	export default {
		data() {
			return {
				event: {
					date: "",
					location: "",
					bands: [{
					  count: 0
					}],
					archive: false
				},
			    count: 0,
			    submitted: false
			}
		},
		firebase: {
			events: db.ref('events')
		},
		methods: {
			add: function() {
			  this.event.bands.push({
			    count: ++this.count
			  });
			},
			submit: function(){
				this.$validator.validateAll()
				.then( (result) => { if (result) {
				    this.$firebaseRefs.events.push({
				    	date: this.event.date,
				    	location: this.event.location,
				    	bands: this.event.bands,
				    	archive: this.event.archive
				    }).then( this.submitted = true ) 
				} } )
			}
		}
	}

</script>

<style>

	section {
		text-align: left;
	}

	form > div {
		margin-top: 1rem;
	}

	label {
		display: block;
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

	.band {
		margin-top: 1rem;
	}

	.bands div:last-of-type .button.add {
		display: block;
		float: right;
	}

	input.is-danger {
		border: 1px solid red;
	}

	span.is-danger {
		color: red;
		display: block;
		font-size: 0.85em;
	}

</style>