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
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        draggable: false,
        map: map,
        icon: "http://www.4smileys.com/smileys/food-smileys/hungry_boy.gif",
        animation: google.maps.Animation.DROP
      });
    var geocoder = new google.maps.Geocoder();
    var showTrucks = document.getElementById("showTrucks");
    showTrucks.addEventListener('click', function(e){
      e.preventDefault();
      geocodeAddress(geocoder, map);
    });
  }
  function geocodeAddress(geocoder, resultsMap) {
          for (i = 0; i < objArr.length; i++) {
            var address = JSON.stringify(objArr[i].address)
            geocoder.geocode({'address': address}, function(results, status) {
              if (status === google.maps.GeocoderStatus.OK) {
                console.log(results[0].formatted_address);
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                  map: resultsMap,
                  position: results[0].geometry.location,
                  icon: "http://howtostartafoodtruckbusinessinindia.com/wp-content/uploads/foodtruck-icon-web.png",
                  draggable: false,
                  map: map,
                });
              };
            });
          }; // for
        }; // geocode

  getLocation();
});


