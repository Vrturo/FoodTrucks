// equivilant to $(document).ready
document.addEventListener('DOMContentLoaded', function () {

  // displays location from the getlocation function
  var location = document.getElementById("location");
  function showPosition(position) {
      location.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
    initialize(position.coords.latitude, position.coords.longitude);
  };

  // html5 gets geo location
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          location.innerHTML = "Geolocation is not supported by this browser.";
      }
  };
  // initializing google maps
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

    // set geocode so we can identify truck stops with address
    var geocoder = new google.maps.Geocoder();
    var showTrucks = document.getElementById("showTrucks");
    showTrucks.addEventListener('click', function(e){
      e.preventDefault();
      geocodeAddress(geocoder, map);
    });
  }

  function geocodeAddress(geocoder, resultsMap) {
    for (i = 0; i < objArr.length; i++) {
      var name = objArr[i].applicant;
      var address = objArr[i].address;
      var fooditems = objArr[i].fooditems;
      var addressString = JSON.stringify(objArr[i].address + " San Francisco, CA");
      geocoder.geocode({'address': addressString}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          // resultsMap.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location,
            icon: "http://www.localsconnected.com/wp-content/uploads/2014/11/Food-Truck-Icon.png",
            draggable: false,
            map: map,
            animation: google.maps.Animation.DROP
          });
          // add listener to click on marker
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          console.log(results[0]);
          var infowindow = new google.maps.InfoWindow({
              content: '<h3>' + name + '</h3>' +
                       address + '<br>' + fooditems

          });

        }; // if
      }); // geocode
    }; // for
  }; // geocodeAddress

  getLocation();
}); // document


