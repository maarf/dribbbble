var images = document.getElementById('main').getElementsByTagName('img');
for (var i=0; i<images.length; i++) {
	var sources = images[i].getAttribute('src').replace('_teaser','');
	images[i].setAttribute('src',sources);
	sources = ''
}