document.addEventListener('DOMContentLoaded', function () {
  var request = new XMLHttpRequest();
  request.open("GET", "https://data.sfgov.org/resource/6a9r-agq8.json", true);
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState != 4 || request.status != 200) return;
      obj = JSON.parse(request.responseText);
      for (i = 0; i < obj.length; i++) {
        console.log(obj[i]);
      }
    document.getElementById("data").innerHTML = request.responseText;
  };
});
