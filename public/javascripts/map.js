
//  function initMap() {
//   GoogleMapsLoader.load(function(google) {
//     new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//     });
//   });
// }




var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

$( document ).ready(function() {
  initMap();
});
