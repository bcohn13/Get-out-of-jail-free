
  var map = L.map("map", {preferCanvas: true}).setView([39.1433333,-77.2016667], 13);

  L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=PpwcNdpieCv3NVxinKED',{
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }).addTo(map);

  const icon = L.icon({
    iconSize: [20, 35],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  });


  Promise.all([
    fetch('/api', {
      method: 'POST', 
      headers: {
      'Content-Type': 'application/json' 
    },
    })]).then(async ([response]) => {
    const responseData = await response.json();
    const data1 = responseData;
   
    const layerGroup = L.featureGroup().addTo(map);

    
    for (let i=0;i<data1.length;i++) {
        const regex = new RegExp('Theft');
        if (data1[i].crimename1.match(regex) || data1[i].crimename2.match(regex) || data1[i].crimename3.match(regex))  {
        console.log(data1[i])
    }}

      
    data1.forEach(({latitude, longitude}) => {
      layerGroup.addLayer(
        L.marker([latitude, longitude], {icon}).bindPopup(
  
        )
      );
    });
  
    map.fitBounds(layerGroup.getBounds());
  });

