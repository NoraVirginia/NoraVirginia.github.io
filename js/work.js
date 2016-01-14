	var map = L.map('map');//.setView([44.635957, -123.260738], 12)
	L.esri.basemapLayer('DarkGray').addTo(map);
	map.locate();
	map.on('locationfound', onLocationFound);

	var greenIcon = L.icon({
    iconUrl: 'images/leaf-green.png',
    shadowUrl: 'images/leaf-shadow.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});
	
	var me = L.marker([44.562343, -123.262790], {icon: greenIcon}).bindPopup("Here's where I live!");
	
	function onLocationFound(e) {
	// create a marker at the users "latlng" and add it to the map
	map.setView([44.562343, -123.262790], 16)
	me.addTo(map)
	}