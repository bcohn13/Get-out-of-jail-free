let map;
// Found center here: https://www.travelmath.com/county/Prince+Georges+County,+MD
function init() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.906334, lng: -76.882176 },
    zoom: 11,
    minZoom: 11,
    zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUI: true,
        gestureHandling: 'none',
  });
}
