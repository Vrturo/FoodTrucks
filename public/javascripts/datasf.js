document.addEventListener('DOMContentLoaded', function () {
  var request = new XMLHttpRequest();
  request.open("GET", "https://data.sfgov.org/resource/rqzj-sfat.json", true);
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState != 4 || request.status != 200) return;
        // if api call goes through parse the long string and push each object into an array
        obj = JSON.parse(request.responseText);
        objArr = []
        for (i = 0; i < obj.length; i++) {
          objArr.push(obj[i]);
        }


        // append only the attributes I need to the ordered list in the DOM
        var ol = document.getElementById("foodTrucksList");
        for (i = 0; i < objArr.length; i++){
          var li = document.createElement("li");
          li.className = "foodTruck";
          li.innerHTML =
            "<h3>" + objArr[i].applicant +"</h3>" +
            "<strong>Address</strong>: " + objArr[i].address +
            "<br><strong>Schedule</strong>: " + objArr[i].dayshours +
            "<br><strong>Food</strong>: " + objArr[i].fooditems + "<br>";
          ol.appendChild(li);
        }; // for
    }; // if
}); // document
