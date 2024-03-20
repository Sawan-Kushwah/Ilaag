let doctorMap;
let marker;

function initMap() {
    doctorMap = L.map('doctorMap').setView([22.722357081788935, 75.86471723208145], 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 19,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibmF3YWJraDIwNDAiLCJhIjoiY2x0aWwydmY2MGRhYzJxbzBnb3ZkZGFwYyJ9.pOki1d8O8P4SW9xX9BrPXA'
    }).addTo(doctorMap);

    marker = L.marker([22.722357081788935, 75.86471723208145], { draggable: true }).addTo(doctorMap);

    marker.on('dragend', function () {
        document.getElementById("doctorLatitude").value = marker.getLatLng().lat;
        document.getElementById("doctorLongitude").value = marker.getLatLng().lng;
    });
}

function searchLocation() {
    const address = document.getElementById("doctorSearchInput").value;
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
        .then(response => response.json())
        .then(data => {
            const { lat, lon } = data[0];
            doctorMap.setView([lat, lon], 12);
            marker.setLatLng([lat, lon]);
        })
        .catch(error => console.log('Error:', error));
}
// Initialize the map
initMap();