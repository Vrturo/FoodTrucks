document.addEventListener('DOMContentLoaded', function () {
  var request = new XMLHttpRequest();
  request.open("GET", "https://data.sfgov.org/resource/6a9r-agq8.json", true);
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState != 4 || request.status != 200) return;
      obj = JSON.parse(request.responseText);
      objArr = []
      for (i = 0; i < obj.length; i++) {
        objArr.push(obj[i]);
      }
      for (i = 0; i < objArr.length; i++){
        document.getElementById("data").innerHTML.push(
          "Food Service: " + objArr[i].applicant +
          "<br>Adress: " + objArr[i].address +
          "<br>Schedule: " + objArr[i].dayshours +
          "<br>Food: " + objArr[i].fooditems
        );
      }
  };
});
