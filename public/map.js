let crimeData=[];


  fetch('/api', {
    method: 'POST', 
    headers: {
    'Content-Type': 'application/json' 
  },
  }).then(blob => blob.json())
  .then(data => crimeData.push(data));
  console.log(crimeData)


  var map = L.map("map", {preferCanvas: true}).setView([38.906334,-76.88217], 13);

  L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=PpwcNdpieCv3NVxinKED',{
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }).addTo(map);

  const icon = L.icon({
    iconSize: [20, 35],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  });


  Promise.all([
    fetch(
      "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json"
    )
  ]).then(async ([response]) => {
    const responseData = await response.json();
    const data1 = responseData;
  
    const layerGroup = L.featureGroup().addTo(map);
  
    data1.forEach(({latitude, longitude}) => {
      layerGroup.addLayer(
        L.marker([latitude, longitude], {icon}).bindPopup(
  
        )
      );
    });
  
    map.fitBounds(layerGroup.getBounds());
  });

/*
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
