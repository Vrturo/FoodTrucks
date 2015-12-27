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
  var map;
  function initialize(lat, lng) {
      var mapOptions = {
      zoom: 12,
      center:{lat: lat, lng: lng}
    };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }
  function addMarker() {
    markers.push(new google.maps.Marker({
      position: map,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP
    }));
    iterator++;
  }

  getLocation();
});


