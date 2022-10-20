<template>
<transition appear>

	<main>

		<section class="shows">
			<h2>Upcoming Shows</h2>
			<ul>
				<div class="loading" v-if="!shows.length"></div>
				<template v-for="show in chronShows">
					<li v-if="show.archive === false">
						<strong>
							<span v-if="show.dateEnd">
								{{ formatDate(show.dateShort) }} &#45; {{ formatDate(show.dateEnd) }}
							</span>
							<span v-else>
								{{ formatDate(show.date) }}
							</span>
						</strong>
						<span v-if="show.note" class="note">{{ show.note }}</span>
						<span class="location">{{ show.location }}</span>
						<span v-if="show.bands" v-for="(band, index) in show.bands" class="band">
							<a v-if="band.url" v-bind:href="band.url">{{ band.name }}</a><span v-else>{{ band.name }}</span><span v-if="index+1 < show.bands.length">, </span>
						</span>
					</li>
				</template>
			</ul>
		</section>

		<section>

			<h2>Past Shows</h2>

			<div class="loading" v-if="!shows.length"></div>
			<template v-for="show in reverseChronShows">
				<p v-if="show.archive !== false">
					<strong>{{ formatDate(show.date) }}</strong> &#151;
					<span v-if="show.note">{{ show.note }}</span>
					<span v-else>
						<span v-if="show.bands" v-for="(band, index) in show.bands">{{ band.name }}<span v-if="index+1 < show.bands.length">, </span></span> <!-- comma-separated list of bands -->
					</span>
					@ {{ show.location }}
				</p>
			</template>
		</section>

	</main>

</transition>
</template>

<script>

	import _ from 'lodash'
	import moment from 'moment'
	
	export default {
		data() {
			return {
				announcements: {},
				shows: [
					{
					  archive: false,
					  bands: [
					    {
					      name: "Captured! by Robots",
					      url: "https://capturedbyrobots.bandcamp.com"
					    },
					    {
					      name: "Math the Band",
					      url: "https://maththeband.bandcamp.com/"
					    }
					  ],
					  date: "2022/10/08",
					  location: "Black Box, Providence, RI"
					},
					{
					  bands: [
					    {
					      name: "Crafter",
					      url: "https://crafterhc.bandcamp.com"
					    },
					    {
					      name: "Peace Test",
					      url: "https://peacetest.bandcamp.com"
					    },
					    {
					      name: "Rage//Quit",
					      url: "https://ragequithc.bandcamp.com/"
					    }
					  ],
					  date: "2019/09/10",
					  location: "AS220, Providence RI"
					},
					{
					  bands: [
					    {
					      name: "Down with Rent",
					      url: "https://downwithrent.bandcamp.com/"
					    },
					    {
					      name: "Taciturn",
					      url: "https://taciturntheband.bandcamp.com/"
					    },
					    {
					      name: "Boiling Point",
					      url: "https://boilingpointpvd.bandcamp.com/"
					    },
					    {
					      name: "Hairspray Queen",
					      url: "https://hairsprayqueen.bandcamp.com/"
					    },
					    {
					      name: "+ more"
					    }
					  ],
					  date: "2019/07/04",
					  location: "Al Dios, Providence RI",
					  note: "* Fuck the Fourth Fest *"
					},
					{
					  bands: [
					    {
					      name: "Towanda",
					      url: "https://towanda.bandcamp.com/"
					    },
					    {
					      name: "Space Camp",
					      url: "https://spacecampct.bandcamp.com/"
					    },
					    {
					      name: "Wolf's Milk",
					      url: "https://wolfsmilk.bandcamp.com/album/wolfs-milk "
					    }
					  ],
					  date: "2019/04/18",
					  location: "Machines with Magnets, Pawtucket RI"
					},
					{
					  bands: [
					    {
					      name: "Sap",
					      url: "https://sapma.bandcamp.com/releases"
					    },
					    {
					      name: "Primitive Rage",
					      url: "https://primitiveragehc.bandcamp.com/album/ouroboros-mentality"
					    },
					    {
					      name: "Gudsforladt",
					      url: "https://gudsforladt.bandcamp.com/"
					    },
					    {
					      name: "Perennial",
					      url: "https://perennialtheband.bandcamp.com"
					    },
					    {
					      name: "uncertain",
					      url: "https://uncertain.bandcamp.com/music"
					    },
					    {
					      name: "WIMP",
					      url: "https://wimpforwimp.bandcamp.com/releases"
					    },
					    {
					      name: "Causa",
					      url: "https://causapunx.bandcamp.com/"
					    },
					    {
					      name: "+ more",
					      url: "https://www.indiegogo.com/projects/sheer-queer-fest-2018#/"
					    }
					  ],
					  date: "2018/09/21",
					  "dateEnd": "2018/09/23",
					  location: "Hardcore Stadium, Cambridge MA",
					  note: "* Sheer Queer Fest *"
					},
					{
					  bands: [
					    {
					      name: "Lilac",
					      url: "https://lilacchicago.bandcamp.com"
					    }
					  ],
					  date: "2018/07/31",
					  location: "Machines with Magnets, Providence RI"
					},
					{
					  bands: [
					    {
					      name: "Changeling",
					      url: "http://changelingmpls.bandcamp.com/"
					    },
					    {
					      name: "Obaku",
					      url: "http://obaku.bandcamp.com/"
					    },
					    {
					      name: "Empty Field"
					    }
					  ],
					  date: "2018/06/28",
					  location: "Machines with Magnets, Providence RI"
					},
					{
					  bands: [
					    {
					      name: "Pere Ubu",
					      url: "http://www.ubuprojex.com/"
					    },
					    {
					      name: "SEA",
					      url: "https://heavysea.bandcamp.com/"
					    },
					    {
					      name: "Escuela",
					      url: "https://escuelaescuela.bandcamp.com/"
					    },
					    {
					      name: "Rejiem",
					      url: "https://rejiem.bandcamp.com/album/new-beginnings-ep"
					    },
					    {
					      name: "YAHKÈL",
					      url: "https://yahkel.bandcamp.com/album/we-will-rise-demo"
					    },
					    {
					      name: "+ many more",
					      url: "http://bostonhasslefest.com/"
					    }
					  ],
					  date: "2017/11/11",
					  location: "ONCE, Somerville MA",
					  note: "Hassle Fest 9"
					},
					{
					  bands: [
					    {
					      name: "Think Tank"
					    },
					    {
					      name: "Big Bliss"
					    },
					    {
					      name: "Dog Shepherd"
					    }
					  ],
					  date: "2017/06/29",
					  location: "Trans-Pecos (Queens NY)"
					},
					{
					  bands: [
					    {
					      name: "Xylitol"
					    },
					    {
					      name: "Dauðyflin"
					    },
					    {
					      name: "Patsy"
					    },
					    {
					      name: "Sap"
					    }
					  ],
					  date: "2017/07/19",
					  location: "Psychic Readings, Providence RI"
					},
					{
					  bands: [
					    {
					      name: "Sunrot"
					    },
					    {
					      name: "Godroot"
					    }
					  ],
					  date: "2017/08/04",
					  location: "Funky Jungle, Providence RI"
					},
					{
					  bands: [
					    {
					      name: "Think Tank"
					    },
					    {
					      name: "Perennial"
					    },
					    {
					      name: "Milky Wimpshake"
					    },
					    {
					      name: "Electric Mail Myself To Thoreau"
					    }
					  ],
					  date: "2017/07/01",
					  location: "Gold Spring Hollow (Belchertown MA)"
					},
					{
					  bands: [
					    {
					      name: "Think Tank"
					    },
					    {
					      name: "Donor"
					    },
					    {
					      name: "Blind Raftery"
					    }
					  ],
					  date: "2017/06/30",
					  location: "Overlook Hotel (Philadelphia PA)"
					},
					{
					  bands: [
					    {
					      name: "Think Tank"
					    },
					    {
					      name: "Opening Bell"
					    },
					    {
					      name: "Exposed as Rot"
					    }
					  ],
					  date: "2017/06/28",
					  location: "Osborn House (New Haven CT)"
					},
					{
					  bands: [
					    {
					      name: "visibilities"
					    },
					    {
					      name: "Suicide Magnets"
					    },
					    {
					      name: "Caroline Park"
					    }
					  ],
					  date: "2017/05/26",
					  location: "Psychic Readings (Providence, RI)"
					},
					{
					  bands: [
					    {
					      name: "Thou"
					    },
					    {
					      name: "Cloudrat"
					    },
					    {
					      name: "Moloch"
					    }
					  ],
					  date: "2017/07/01",
					  location: "Aurora (Providence RI)"
					},
					{
					  bands: [
					    {
					      name: "Think Tank"
					    },
					    {
					      name: "The Oracle"
					    }
					  ],
					  date: "2017/03/11",
					  location: "Machines With Magnets (Pawtucket, RI)"
					},
					{
					  bands: [
					    {
					      name: "Davidians"
					    },
					    {
					      name: "N.E.G."
					    },
					    {
					      name: "Penetrode"
					    }
					  ],
					  date: "2017/03/05",
					  location: "LAVA (Philadelphia, PA)"
					},
					{
					  bands: [
					    {
					      name: "Northern Liberties"
					    },
					    {
					      name: "Hulk Smash"
					    }
					  ],
					  date: "2017/03/03",
					  location: "Sound Hole (Philadelphia, PA)"
					},
					{
					  bands: [
					    {
					      name: "Occult Blood"
					    },
					    {
					      name: "Flinstones"
					    },
					    {
					      name: "Double Dragon"
					    }
					  ],
					  date: "2017/02/01",
					  location: "Machines With Magnets (Pawtucket, RI)"
					},
					{
					  bands: [
					    {
					      name: "Empty Grows Every Bed"
					    },
					    {
					      name: "Mary Burke"
					    }
					  ],
					  date: "2016/10/21",
					  location: "Psychic Readings (Providence, RI)"
					},
					{
					  bands: [
					    {
					      name: "Mossy Fiber"
					    },
					    {
					      name: "Nan Dejour"
					    },
					    {
					      name: "Sultanique"
					    }
					  ],
					  date: "2016/04/16",
					  location: "52 Chapped Lips (Providence, RI)"
					},
					{
					  bands: [
					    {
					      name: "Rectrix"
					    },
					    {
					      name: "PWR RTLZ"
					    }
					  ],
					  date: "2015/07/12",
					  location: "Red Room, Providence RI"
					},
					{
					  bands: [
					    {
					      name: "Börn"
					    },
					    {
					      name: "Vitka"
					    },
					    {
					      name: "Pvblic Bath"
					    }
					  ],
					  date: "2015/05/05",
					  location: "Red Room, Providence RI"
					},
					{
					  bands: [
					    {
					      name: "Sunrot",
					      url: "https://sunrot.bandcamp.com/"
					    },
					    {
					      name: "Dead Empires",
					      url: "https://deadempires.bandcamp.com/"
					    },
					    {
					      name: "Smock",
					      url: "https://snifflingindiekids.bandcamp.com/track/chug"
					    }
					  ],
					  date: "2017/11/02",
					  location: "Meatlocker, Montclair NJ"
					},
					{
					  bands: [
					    {
					      name: "Spitehouse",
					      url: "https://www.youtube.com/watch?v=JNoLsRyRdnI"
					    },
					    {
					      name: "Worst Days",
					      url: "https://worstdays.bandcamp.com/"
					    }
					  ],
					  date: "2017/10/02",
					  location: "Aurora, Providence RI"
					},
					{
					  bands: [
					    {
					      name: "Shit City",
					      url: "https://shitcity.bandcamp.com/"
					    },
					    {
					      name: "Night Raids",
					      url: "https://nightraids.bandcamp.com/"
					    }
					  ],
					  date: "2017/11/01",
					  location: "Cousin Danny's, Philadelphia, PA"
					},
					{
					  bands: [
					    {
					      name: "Endon",
					      url: "https://endon.bandcamp.com/"
					    },
					    {
					      name: "Tovarish",
					      url: "https://tovarish.bandcamp.com/"
					    },
					    {
					      name: "Baylies Band",
					      url: "https://bayliesband.bandcamp.com/"
					    }
					  ],
					  date: "2017/10/29",
					  location: "Alchemy, Providence RI"
					},
					{
					  archive: true,
					  bands: [
					    {
					      name: "Chained to the Bottom of the Ocean",
					      url: "http://chainedtothebottomoftheocean.bandcamp.com"
					    },
					    {
					      name: "Oroboro",
					      url: "https://0robor0.bandcamp.com"
					    },
					    {
					      name: "Space Camp",
					      url: "https://spacecampct.bandcamp.com/"
					    }
					  ],
					  date: "2017/11/03",
					  location: "Unitarian Universalist Church, Amherst MA"
					},
					{
					  archive: true,
					  bands: [
					    {
					      name: "Blood Club",
					      url: "https://lianasfire.bandcamp.com"
					    },
					    {
					      name: "Wimp",
					      url: "https://www.youtube.com/watch?v=LM9zpc0jIv8"
					    },
					    {
					      name: "Ice Cream Cake"
					    },
					    {
					      name: "Chained to the Bottom of the Ocean",
					      url: "https://chainedtothebottomoftheocean.bandcamp.com"
					    }
					  ],
					  date: "2017/11/24",
					  location: "Democracy Center, Cambridge MA"
					},
					{
					  archive: true,
					  bands: [
					    {
					      name: "Soul Glo",
					      url: "https://soulglophl.bandcamp.com/"
					    },
					    {
					      name: "Listless",
					      url: "https://www.youtube.com/watch?v=1JVZP9Vjuqs"
					    },
					    {
					      name: "Hairspray Queen",
					      url: "http://hairsprayqueen.bandcamp.com/"
					    }
					  ],
					  date: "2018/10/16",
					  location: "Dusk, Providence RI"
					}
				]
			}
		},
		computed: {
		  chronShows: function () {
		    return _.orderBy(this.shows, 'date')
		  },
		  reverseChronShows: function () {
		    return _.orderBy(this.shows, 'date').reverse();
		  }
		},
		methods: {
			formatDate(value) {
				return moment(String(value)).format('MMMM D YYYY')
			},
			formatDateShort(value) {
				return moment(String(value)).format('MMMM D')
			}
		},
	}

</script>
