document.addEventListener('DOMContentLoaded', function () {
  var location = document.getElementById("location");
  function showPosition(position) {
      location.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
    initialize(position.coords.latitude, position.coords.longitude);
  };
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          location.innerHTML = "Geolocation is not supported by this browser.";
      }
  };

  var neighborhoods = [
      new google.maps.LatLng(52.511467, 13.447179),
      new google.maps.LatLng(52.549061, 13.422975),
      new google.maps.LatLng(52.497622, 13.396110),
      new google.maps.LatLng(52.517683, 13.394393)
    ];
  var markers = [];
  var iterator = 0;
  var map;
  function initialize(lat, lng) {
      var mapOptions = {
      zoom: 12,
      center:{lat: lat, lng: lng}
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

  getLocation();
});


