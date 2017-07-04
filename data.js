window.onload = function () {

    var announcements = new Vue({

      el: '.announcement',
      data: {
		announcements: [
			{
				subtitle: 'JUNE 28 - JULY 1',
				title: 'Mini Tour',
				content: 'Thank you to our friends in <a href="https://thinktanknoise.bandcamp.com/">Think Tank</a> for an amazing tour together!!'
			},
			{
				subtitle: 'NEW TAPE',
				title: 'Fill Your Lungs',
				content: 'Named one of Noisey\'s <a href="https://noisey.vice.com/en_us/article/bjx8wd/the-30-best-overlooked-albums-of-2017-so-far">best overlooked albums of 2017</a><br/><a href="http://m-a-r.bandcamp.com">m-a-r.bandcamp.com</a>'
			}
		]
      }

    });

    var shows = new Vue({

      el: '.shows',
      data: {
		shows: [
			{
				date: 'July 19 2017',
				bands: '<a href="https://xylitolband.bandcamp.com/">Xylitol</a>, <a href="https://daudyflin.bandcamp.com/">Dau&#240;yflin</a>, <a href="https://itspatsy.bandcamp.com/album/demo">Patsy</a>, Sap',
				location: 'Psychic Readings, Providence RI'
			},
			{
				date: 'August 4 2017',
				location: 'Funky Jungle, Providence RI'
			},
			{
				date: 'October 28 2017',
				bands: '<a href="https://heavysea.bandcamp.com/">SEA</a>, <a href="https://preen.bandcamp.com/">Preen</a>',
				location: 'Boston MA'
			}
		]
      }
      
    });

};