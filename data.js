window.onload = function () {
    new Vue({
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
};