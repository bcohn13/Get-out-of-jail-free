let crimeData=[];


  fetch('/api', {
    method: 'POST', 
    headers: {
    'Content-Type': 'application/json' 
  },
  }).then(blob => blob.json())
  .then(data => crimeData.push(data));
  console.log(crimeData)


  var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiYmNvaG4xMzMiLCJhIjoiY2tpaTJqM3ZhMDh0ejJwbjU3NjBvaG1obyJ9.PEncsQ0_uaf3tU7allRphA}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmNvaG4xMzMiLCJhIjoiY2tpaTJqM3ZhMDh0ejJwbjU3NjBvaG1obyJ9.PEncsQ0_uaf3tU7allRphA'
}).addTo(mymap);
/*let map;
// Found center here: https://www.travelmath.com/county/Prince+Georges+County,+MD
function init() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.906334, lng: -76.882176 },
    zoom: 11,
    minZoom: 11,
    zoomControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
    disableDefaultUI: true,
    gestureHandling: 'none',
  });
  
}
*/
