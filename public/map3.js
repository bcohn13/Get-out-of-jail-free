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
        const zipCodes={"20812": {"lat": 38.967040999999995, "lng": -77.14388100000001}, "20814": {"lat": 39.004989, "lng": -77.10149}, "20815": {"lat": 38.983385999999996, "lng": -77.079346}, "20816": {"lat": 38.95695, "lng": -77.120006}, "20817": {"lat": 38.997271999999995, "lng": -77.151816}, "20818": {"lat": 38.973445, "lng": -77.162497}, "20832": {"lat": 39.150347, "lng": -77.07824000000001}, "20833": {"lat": 39.207175, "lng": -77.05467}, "20837": {"lat": 39.116506, "lng": -77.407115}, "20838": {"lat": 39.218101000000004, "lng": -77.390831}, "20839": {"lat": 39.188307, "lng": -77.43497099999999}, "20841": {"lat": 39.191853, "lng": -77.32752099999999}, "20842": {"lat": 39.199878999999996, "lng": -77.415267}, "20850": {"lat": 39.091338, "lng": -77.182294}, "20851": {"lat": 39.079082, "lng": -77.12185799999999}, "20852": {"lat": 39.051990999999994, "lng": -77.121931}, "20853": {"lat": 39.101713000000004, "lng": -77.094562}, "20854": {"lat": 39.032771999999994, "lng": -77.22083}, "20855": {"lat": 39.133184, "lng": -77.134383}, "20860": {"lat": 39.142365999999996, "lng": -77.025412}, "20861": {"lat": 39.149774, "lng": -76.998236}, "20862": {"lat": 39.18123, "lng": -77.01880600000001}, "20866": {"lat": 39.109275, "lng": -76.933973}, "20868": {"lat": 39.126395, "lng": -76.969321}, "20871": {"lat": 39.261340999999994, "lng": -77.282547}, "20872": {"lat": 39.294465, "lng": -77.216125}, "20874": {"lat": 39.133055999999996, "lng": -77.301828}, "20876": {"lat": 39.208384, "lng": -77.23715200000001}, "20877": {"lat": 39.140749, "lng": -77.19206}, "20878": {"lat": 39.112821000000004, "lng": -77.250504}, "20879": {"lat": 39.168416, "lng": -77.17150600000001}, "20880": {"lat": 39.139726, "lng": -77.17355699999999}, "20882": {"lat": 39.237721, "lng": -77.156789}, "20886": {"lat": 39.188551000000004, "lng": -77.20509100000001}, "20895": {"lat": 39.02704, "lng": -77.077609}, "20896": {"lat": 39.035382, "lng": -77.092454}, "20899": {"lat": 39.143737, "lng": -77.216132}, "20901": {"lat": 39.021495, "lng": -77.00977900000001}, "20902": {"lat": 39.045249, "lng": -77.039264}, "20903": {"lat": 39.021433, "lng": -76.980774}, "20904": {"lat": 39.066615999999996, "lng": -76.980935}, "20905": {"lat": 39.109705, "lng": -76.98832900000001}, "20906": {"lat": 39.087321, "lng": -77.057159}, "20910": {"lat": 39.002837, "lng": -77.03670100000001}, "20912": {"lat": 38.981606, "lng": -77.001161}}
        if (data1[i].crimename1.match(regex) || data1[i].crimename2.match(regex) || data1[i].crimename3.match(regex))  {
        console.log(data1[i])
        layerGroup.addLayer(
            L.marker([data1[i].latitude, data1[i].longitude], {icon}).bindPopup(
      
            )
          );
    }}

      
    /*data1.forEach(({latitude, longitude}) => {
      layerGroup.addLayer(
        L.marker([latitude, longitude], {icon}).bindPopup(
  
        )
      );
    });*/
  
    map.fitBounds(layerGroup.getBounds());
  });