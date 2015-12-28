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
      console.log(objArr[0].address);
    document.getElementById("data").innerHTML =
      "Food Service: " + objArr[0].applicant +
      "<br>Adress: " + objArr[0].address +
      "<br>Schedule: " + objArr[0].dayshours +
      "<br>Food: " + objArr[0].fooditems
  };
});
