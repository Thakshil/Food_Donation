var google;

function init() {
    // Basic options for a simple Google Map
    var myLatlng = new google.maps.LatLng(27.2046, 77.4977); // This is set to India

    var mapOptions = {
        zoom: 7, // Zoom level
        center: myLatlng, // Center of the map
        scrollwheel: false, // Disable scroll zoom
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map 
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    // Update the addresses array with your new address
    var addresses = ['Delhi', 'Mumbai'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location;
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });
        });
    }
}
google.maps.event.addDomListener(window, 'load', init);
