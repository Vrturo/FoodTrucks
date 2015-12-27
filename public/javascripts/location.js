var location = document.getElementById("location");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        location.innerHTML = "Geolocation is not supported by this browser.";
    }
};
function showPosition(position) {
    location.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
};
// function start() {
//   // initialize();
//   getLocation();
// }
// window.onload = start;
// window.onload = getLocation();
