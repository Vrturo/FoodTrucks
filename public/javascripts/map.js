// equivilant to $(document).ready
document.addEventListener('DOMContentLoaded', function () {

  // displays location from the getlocation function
  var location = document.getElementById("location");
  function showPosition(position) {
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
      zoom: 14,
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
      // Access i directly from the anonymous function (via closure),
       // but it needs to be captured so that each call to geocode gets its own copy.
      (function(iter){
      var name = objArr[i].applicant;
      var dayshours = objArr[i].dayshours;
      var address = objArr[i].address;
      var fooditems = objArr[i].fooditems;
      var contentString = '<h3><strong>' + name + '</strong></h3>' +
                       '<strong>Address: </strong>' + address +
                       '<br><strong>Food</strong>: ' + fooditems +
                       '<br><strong>Schedule:</strong> ' + dayshours;
      var addressString = JSON.stringify(objArr[i].address + " San Francisco, CA");


        geocoder.geocode({'address': addressString}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
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
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

          }; // if
        }); // geocode
      })(i); // return i so it saves accesss to object
    }; // for
  }; // geocodeAddress
  getLocation();
}); // document



