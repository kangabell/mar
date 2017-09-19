<template>

	<main>

		<section v-for="item in items">

			<iframe v-if="item.type === 'iframe'" v-bind:src="item.src" seamless><a v-bind:href="item.url">{{ item.title }}</a></iframe>

		</section>

		<section>

			<h2>Lyrics</h2>

			<div>
				<h3>Fill Your Lungs</h3>

				<p>I've been looking hard down a cliff's edge. Eyes to the ground, the wind on my back. </p>

				<p>At night I walk to your yard, watch the light go out. Rub this stone in my palm, watch that window. I didn't think– </p>

				<p>And on the highway, in a car. I see metal, I see walls. I didn't think I could be free.</p> 

				<p>So I said, <br/>
				Focus. Focus the rage. Fill your lungs.</p>
			</div>

			<div>
				<h3>Weather the Storm</h3>

				<p>Shame. Ungrateful. You hid.</p> 

				<p>Patience is a virtue. Silence and detach yourself. Crush each of his demons. </p>

				<p>Weather the storm. Bury your heart. To heal him is to heal yourself.</p>
			</div>

			<div>
				<h3>Sick of It</h3>

				<p>I just wanna have a good day today. I'm tired. Keep trying to erase this. So sick of it. How many times have I tried to rid it? </p>

				<p>I just wanna have a good day today. I'm sorry, can't be your perfect victim. Do you get it? Can't I just be human?</p>
			</div>

			<div>
				<h3>To My Dead Brother</h3>
				<p>Cut from the same cloth. But now the threads are thin, the threads are bare. </p>

				<p>Twelve years. </p>

				<p>The flame is frail, waiting in the wind. Today a song came on and it grabbed me by the gut. I fell to the floor, wishing for our family that’s gone. I think of you a lot... As time goes on, I think of your even more. I follow your scent, but you’re only in the air. </p>

				<p>I wish I knew the drugs wouldn’t work. I wish I knew the fucking words. </p>

				<p>Each boy is a mirage. Each man, just a mirage. I wish I knew what I know now, wish I knew to say the words.</p>
			</div>

			<div>
				<h3>Hide Your Pain</h3>

				<p>Ghost: You’re not trash, never were. Choked thoughts on the ground. Heat on skin, your screams come out. </p>

				<p>We hid our hair and our limbs. We slept with one eye open. </p>

				<p>Don’t– Don’t speak. Hide your hips. <br/>
				Don’t look back. <br/>
				SISTER, HIDE YOUR FUCKING PAIN.</p>

			</div>

			<div>
				<h3>From a Hospital Bed</h3>

				<p>Their faces shine bright in the dark. I try, but can’t push them out. </p>

				<p>These lines aren’t cuts, they’re a map. <br/>
				THESE LINES AREN’T CUTS, THEY’RE MY MAP. </p>

				<p>Now you have arrived, to settle and mend. Each bone arranged. Re-enact the rape.</p>

			</div>

			<div>
				<h3>Mind is a Prism</h3>
				<p>MEMORY... IT SPLITS. THE MIND IS A PRISM.</p>

			</div>

			<div>
				<h3>One Night</h3>
				<p>That night was simple. One night is... it’s simple, right? </p>

				<p>This body is failing, it’s fallen. The mind, unraveled. <br/>
				I can’t feel my legs, can’t feel my face... </p>

				<p>That night was simple, so simple. <br/>
				ONE NIGHT IS SIMPLE, RIGHT?!</p>
			</div>

			<div>
				<h3>Love Conquers All</h3>

				<p>Can’t help, can’t stop. I know I know I know. I CAN’T. I keep holding. The bruises, the screams... the phone on the floor. You shed, but I can’t. I carry them all. </p>

				<p>YOU SHED IT. I CAN’T. I CARRY IT. </p>

				<p>I’m in love. Can’t help, can’t stop. <br/>
				I know I know I KNOW! I CAN’T. I keep holding. </p>

				<p>Beaten over the head. But the heart is still beating.</p>
			</div>

		</section>

	</main>

</template>

<script>

	import {db} from '../firebase';

	export default {
		data() {
			return {
				items: {}
			}
		},
		firebase: {
			items: {
				source: db.ref('items'),
			}
		}
	}

</script>

<style>

	iframe {
		border: 0;
		width: 100%;
		height: 120px;
	}

	p {
		font-size: 80%;
	}

</style>