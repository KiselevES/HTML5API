ymaps.ready(init);

function init(){
	var myMap = new ymaps.Map("map", {
		center: [55.75653327716477,37.61530850000001],
		zoom: 16,
		controls : []
	});

	var coords = [
		[55.75, 37.50],
		[55.75, 37.71],
		[55.70, 37.70]
	];

	var myCollection = new ymaps.GeoObjectCollection({}, {
		iconLayout: 'default#image',
		iconImageHref: '/img/marker.png',
		iconImageSize: [42, 59],
		iconImageOffset: [-10, -70]
	});

	var myGeoObjects = [];

	// coords.forEach(function (item) {
	// 	myCollection.add(new ymaps.Placemark(item));
	// });

	coords.forEach(function (item, i) {
		myGeoObjects[i] = new ymaps.GeoObject({
			geometry: {
				type: "Point",
				coordinates: item
			}
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/marker.png',
			iconImageSize: [42, 59],
			iconImageOffset: [-10, -70]
		});

	});

	var myClusterer = new ymaps.Clusterer();
	myClusterer.add(myGeoObjects);
	myMap.geoObjects.add(myClusterer);

	// myMap.geoObjects.add(myCollection);

	// for (var i = 0; i < coords.length; i++) {
	// 	myCollection.add(new ymaps.Placemark(coords[i]));
	// }

	// var myPlacemark = new ymaps.Placemark(
	// 	[55.75653327716477,37.61530850000001],
	// 	{
	// 		hintContent: 'Москва!',
	// 		balloonContent: 'Столица России'
	// 	},
	// 	{
	// 		iconLayout: 'default#image',
	// 		iconImageHref: '/img/marker.png',
	// 		iconImageSize: [42, 59],
	// 		iconImageOffset: [-10, -70]
	// 	});

	// myMap.behaviors.disable(['scrollZoom']);


	// myMap.geoObjects.add(myPlacemark);
}