// UI Elements
const $member = document.querySelector('#member__container')
const $events = document.querySelector('#events__container')
const $photos = document.querySelector('#photos__container')

// Mustache Templates
const profileTemplate = document.querySelector('#profile__template').innerHTML
const eventsTemplate = document.querySelector('#events__template').innerHTML
const photosTemplate = document.querySelector('#photos__template').innerHTML

// data
const members = {
	stooges: [
		{
			name: 'Larry',
			github: 'https://github.com/',
			photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/LFine1936_color.jpg',
			quote: 'We graduated with the highest temperatures in our class.',
		},
		{
			name: 'Curly',
			github: 'https://github.com/',
			photo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Curlyhoward.jpg',
			quote: 'I baked a cake once, but it fell and killed the cat.',
		},
		{
			name: 'Moe',
			github: 'https://github.com/',
			photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Moe_Howard_1937_%28cropped%29.jpg',
			quote: "Queenie, he's got the strongest feet in the kingdom.",
		},
	],
}

const events = {
	fccevents: [
		{
			date: '10-11-2020',
			title: 'Guest Speaker - Mark Zuckerberg',
			description: 'Mark will speak about this new social media app called Facebook (haha)',
		},
		{
			date: '10-18-2020',
			title: 'Coding Workshop - JavaScript and the DOM',
			description: 'We will introduce how to use JS to manipulate HTML elements',
		},
		{
			date: '10-25-2020',
			title: 'Git and GitHub',
			description:
				'We will teach you how to get set up with GitHub and your own GitHub profile',
		},
	],
}

const photos = {
	fccphotos: [
		{
			imgurl:
				'https://res.cloudinary.com/ryucave/image/upload/v1600761102/fcc-seoul-home-page/beehive6_bunca1.jpg',
		},
		{
			imgurl:
				'https://res.cloudinary.com/ryucave/image/upload/v1600761103/fcc-seoul-home-page/beehive4_fprqew.png',
		},
		{
			imgurl:
				'https://res.cloudinary.com/ryucave/image/upload/v1600761103/fcc-seoul-home-page/beehive3_mg38ju.png',
		},
		{
			imgurl:
				'https://res.cloudinary.com/ryucave/image/upload/v1600761103/fcc-seoul-home-page/beehive1_b10mcq.png',
		},
	],
}

const profileHtml = Mustache.render(profileTemplate, members)
$member.insertAdjacentHTML('beforeend', profileHtml)

const eventsHtml = Mustache.render(eventsTemplate, events)
$events.insertAdjacentHTML('beforeend', eventsHtml)

const photosHtml = Mustache.render(photosTemplate, photos)
$photos.insertAdjacentHTML('beforeend', photosHtml)
