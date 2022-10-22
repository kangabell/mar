<template>
<transition appear>

	<main>

		<section class="contact" itemscope itemtype="http://schema.org/MusicGroup">

			<div>
				<h2>About</h2>
				<div v-for="paragraph in paragraphs">
					<p v-html="paragraph.text"></p>
				</div>
				<p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
					<span class="address" itemprop="streetAddress">{{ info.address }}&nbsp;</span>
					<span class="city" itemprop="addressLocality">{{ info.city }}&nbsp;</span>
					<span class="state" itemprop="addressRegion">{{ info.state }}&nbsp;</span>
					<span class="zip" itemprop="postalCode">{{ info.zip }}</span>
				</p>
				<p itemprop="email">{{ info.email }}</p>
				<p><a class="bandcamp img" v-bind:href="info.bandcampURL"><span class="icon"></span> <span class="text">bandcamp</span></a></p>
			</div>

		</section>

	</main>

</transition>
</template>

<script>

	export default {
		data() {
			return {
				paragraphs: [
					{
					  text: "Mar is <a href='http://plastic-idolatry.com/erik/' target='_blank'>Eiríkr Åsheim</a> & <a href='http://art.kangabell.com/' target='_blank'>Kay Belardinelli</a>. They both play all the instruments.<br/>2022 performances also include David Sano on drums. 2019 performances included Gabe Lozada on guitar."
					},
					{
						text: "Mar invokes the healing of pain and oppression through fervent, crushingly heavy music, unearthing trauma and then setting it on fire."
					},
					{
					  text: "<blockquote><p>&#8220;The Providence, Rhode Island duo hurtle themselves into waves of apocalyptic sludge and dire noise with zero regard for their own safety; the riffs come fitfully, lurching and pulling like a rabid dog straining at his leash, as vocalist Kay Belardinelli exorcises her demons in real time, gasping for air and calling down thunder. The lyrics tackle the pain and power of recovery and trauma, imbuing the album's aggrieved, menacing character with a deeply personal bent that only deepens its sense of overwhelming darkness.&#8221;</p> <cite>– Kim Kelly, <a href='https://noisey.vice.com/en_us/article/bjx8wd/the-30-best-overlooked-albums-of-2017-so-far' target='blank'>Noisey</a></cite></blockquote>"
					},
					{
					  text: "<blockquote><p>&#8220;Mar’s echoing doom/sludge is a testament to pain and how music can help you work through tragic events and seek the light on the other side. For this duo [...] the pain that is spoken of is felt keenly through dragged out notes, a voice that is ravaged with experience and an overdriven sound that oppresses from the outset.&#8221;</p> <cite>– <a href='https://bleakmetal.com/2019/01/27/the-round-up-tapes-volume-xvi/amp/' target='blank'>Bleak Metal</a></cite></blockquote>"
					}
				],
				articles: [
					{
					  link: "https://noisey.vice.com/en_us/article/bjx8wd/the-30-best-overlooked-albums-of-2017-so-far",
					  title: "Noisey's 30 Best Overlooked Albums of 2017 So Far"
					},
					{
					  link: "https://bostonhassle.com/focus-the-rage-an-interview-with-mar/",
					  "title": "Boston Hassle interview"
					},
					{
					  link: "https://soundcloud.com/about45degrees/episode-2-kay-belardinelli",
					  title: "Podcast interview with frontperson Kay"
					}
				],
				members: [
					{
					  link: "http://kaybelardinelli.com",
					  name: "Kay Belardinelli"
					},
					{
					  link: "http://plastic-idolatry.com/erik/",
					  name: "Eiríkr Åsheim"
					}
				],
				info: {
					address: "P.O. Box 23285,",
					bandcampURL: "https://m-a-r.bandcamp.com",
					city: "Providence",
					email: "info@marpvd.com",
					state: "RI",
					zip: "02903"
				}
			}
		}
	}

</script>