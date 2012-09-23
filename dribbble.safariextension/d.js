var images = document.getElementById('main').getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
	var sources = images[i].getAttribute('src').replace('_teaser', '');
	images[i].setAttribute('src', sources);
}

var tags = document.getElementsByTagName('div');
for (var i = 0, tagsLength = tags.length; i < tagsLength; i++) {
	if (tags[i].getAttribute('data-picture') !== null) {
		var sourceTags = tags[i].getElementsByTagName('div');
		for (var j = 0, sourceTagsLength = sourceTags.length; j < sourceTagsLength; j++) {
			var dataSource = sourceTags[j].getAttribute('data-src').replace('_teaser', '');
			sourceTags[j].setAttribute('data-src', dataSource);
		}
	}
}
