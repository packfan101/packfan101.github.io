// Initialize and add the map
function initMap() {
  // The location of Uluru
  const office = { lat: 40.5615660332467, lng: -111.92269075175498 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: office,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: office,
    map: map,
  });
}