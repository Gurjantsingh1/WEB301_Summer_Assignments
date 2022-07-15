/*
  - Gurjant singh
  - 0782841
*/
$(function () {
  document.getElementById("location").addEventListener("click",getLocation);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.getElementById("error").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }

});

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

let lat = localStorage.getItem('latitude');
let lon = localStorage.getItem('longitude');
localStorage.setItem('latitude',latitude);
localStorage.setItem('longitude',longitude);
document.getElementById('latitude').value=lat;
document.getElementById('longitude').value=lon;
}

function showError(error) {
  console.log("An error occurred: ", error);
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("Permission denied");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Position unavailable");
      break;
    case error.TIMEOUT:
      console.log("Position took too long!");
      break;
    default:
      console.log("Something went wrong with the geolocation");
  }
}