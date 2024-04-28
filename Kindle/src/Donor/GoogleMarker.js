// Initialize and add the map
function initMap() {
    // The location of your marker
    var location = {lat: 40.712776, lng: -74.005974}; // Example coordinates (New York City)

    // The map, centered at your location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Adjust the zoom level as needed
        center: location
    });

    // The marker, positioned at your location
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
