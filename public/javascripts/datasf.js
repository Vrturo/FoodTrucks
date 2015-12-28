document.addEventListener('DOMContentLoaded', function () {
  var request = new XMLHttpRequest();
  request.open("GET", "https://data.sfgov.org/resource/6a9r-agq8.json", true);
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState != 4 || request.status != 200) return;
    console.log(request.responseText);
    document.getElementById("data").innerHTML = request.responseText;
  };
});
