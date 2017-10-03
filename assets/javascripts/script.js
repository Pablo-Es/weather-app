function initMap()   
{   
	var wspolrzedne = new google.maps.LatLng(50, -50);
	var opcjeMapy = {
	  zoom: 4,
	  center: wspolrzedne,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapa = new google.maps.Map(document.getElementById("map"), opcjeMapy); 


google.maps.event.addListener(mapa, 'click', function(event) {
	addMarker(event.latLng, mapa);
});
// Adds a marker to the map.
function addMarker(location, mapa) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    map: mapa
  });
}
}