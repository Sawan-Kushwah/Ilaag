let map;
let marker;

function initMap() {
    map = L.map('map').setView([22.722357081788935, 75.86471723208145], 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 19,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibmF3YWJraDIwNDAiLCJhIjoiY2x0aWwydmY2MGRhYzJxbzBnb3ZkZGFwYyJ9.pOki1d8O8P4SW9xX9BrPXA'
    }).addTo(map);

    marker = L.marker([22.722357081788935, 75.86471723208145], { draggable: true }).addTo(map);

    marker.on('dragend', function () {
        document.getElementById("latitude").value = marker.getLatLng().lat;
        document.getElementById("longitude").value = marker.getLatLng().lng;
    });
}

function searchLocation() {
    const address = document.getElementById("searchInput").value;
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
        .then(response => response.json())
        .then(data => {
            const { lat, lon } = data[0];
            map.setView([lat, lon], 12);
            marker.setLatLng([lat, lon]);
        })
        .catch(error => console.log('Error:', error));
}
// Initialize the map
initMap();


//opening and closing of map 
let mapOpenButton = document.getElementById("mapOpenButton");
let mapOpenButton1 = document.getElementById("mapOpenButton1");
let mapCloseButton = document.getElementById("mapClose");
let mapContainer = document.getElementsByClassName("mapContainer");
let mainBox = document.getElementsByClassName("mainBox");
console.log(mapContainer);

mapOpenButton1.addEventListener('click', () => {
    mapContainer.item(0).style.display = "block";
    mainBox.item(0).style.display = "none";
})
mapOpenButton.addEventListener('click', () => {
    mapContainer.item(0).style.display = "block";
    mainBox.item(0).style.display = "none";
})
mapCloseButton.addEventListener('click', () => {
    mapContainer.item(0).style.display = "none";
    mainBox.item(0).style.display = "block";

})