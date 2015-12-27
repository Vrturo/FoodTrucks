document.addEventListener('DOMContentLoaded', function () {
  var location = document.getElementById("location");
  function showPosition(position) {
      location.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
  };
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          location.innerHTML = "Geolocation is not supported by this browser.";
      }
  };
  getLocation();
});

var berlin = new google.maps.LatLng(52.520816, 13.410186);
var neighborhoods = [
    new google.maps.LatLng(52.511467, 13.447179),
    new google.maps.LatLng(52.549061, 13.422975),
    new google.maps.LatLng(52.497622, 13.396110),
    new google.maps.LatLng(52.517683, 13.394393)
  ];
var markers = [];
var iterator = 0;
var map;
function initialize() {
    var mapOptions = {
    zoom: 12,
    center: berlin
  };
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
function drop() {
  for (var i = 0; i < neighborhoods.length; i++) {
    setTimeout(function() {
    addMarker();
    }, i * 200);
  }
}
function addMarker() {
  markers.push(new google.maps.Marker({
    position: neighborhoods[iterator],
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  }));
  iterator++;
}
google.maps.event.addDomListener(window, 'load', initialize);


