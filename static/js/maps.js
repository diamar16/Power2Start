var locations = [
  ['Dublin City Council Local Enterprise Office', 'Civic Offices,Block 4, Floor 1, Dublin 8', 'https://www.localenterprise.ie/DublinCity/'],
  ['Dublin South Local Enterprise Office', 'County Hall, Belgard Square North, Tallaght, Dublin 24', 'https://www.localenterprise.ie/SouthDublin'],
  ['Microfinance Ireland', '13 Richview Office Park, Clonskeagh Road, Dublin 14, Ireland, Clonskeagh, Co. Dublin, D14 Y867', 'https://www.microfinanceireland.ie'],
  ['DIT Hothouse', 'Dublin Institute Of Technology, Aungier Street, Dublin, D02HW71', 'https://www.dit.ie/hothouse'],
  ['TCD Innovation Hub', 'Trinity College Dublin, Dublin 2', 'https://www.tcd.ie/explore-innovation/'],
  ['The Innovation Academy, UCD', 'Shackleton Lounge. O’Brien Science Centre, Belfield Campus, University College Dublin', 'https://www.innovators.ie'],
  ['DCU Ryan’s academy', '3013a Lake Dr, Citywest Business Campus, Dublin 24', 'https://www.ryanacademy.ie'],
  ['Social Entrepreneurs Ireland', '12 Warrington Pl, Grand Canal Dock, Dublin', 'https://www.socialentrepreneurs.ie'],
  ['Foroige Youth Entrepreneurship', '12D Joyce Way, Cherry Orchard, Dublin, D12 Y0A6', 'https://www.foroige.ie/'],
  ['Dog Patch Labs', 'The CHQ Building, Custom House Quay, Dublin 1', 'https://dogpatchlabs.com'],
  ['NDRC', 'Crane St, Dublin', 'http://www.ndrc.ie/']
];

var geocoder;
var map;
var bounds = new google.maps.LatLngBounds();

function initialize() {
  map = new google.maps.Map(
    document.getElementById("map-canvas"), {
      center: new google.maps.LatLng(53.350140, -6.266155),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  geocoder = new google.maps.Geocoder();

  for (i = 0; i < locations.length; i++) {
    geocodeAddress(locations, i);
  }
}
google.maps.event.addDomListener(window, "load", initialize);

function geocodeAddress(locations, i) {
  var title = locations[i][0];
  var address = locations[i][1];
  var url = locations[i][2];
  geocoder.geocode({
      'address': locations[i][1]
    },

    function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var marker = new google.maps.Marker({
          icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
          map: map,
          position: results[0].geometry.location,
          title: title,
          animation: google.maps.Animation.DROP,
          address: address,
          url: url
        })
        infoWindow(marker, map, title, address, url);
        bounds.extend(marker.getPosition());
        map.fitBounds(bounds);
      } else {
        alert("geocode of " + address + " failed:" + status);
      }
    });
}

function infoWindow(marker, map, title, address, url) {
  google.maps.event.addListener(marker, 'click', function() {
    var html = "<div><h3>" + title + "</h3><p>" + address + "<br></div><a href='" + url + "'>Website</a></p></div>";
    iw = new google.maps.InfoWindow({
      content: html,
      maxWidth: 350
    });
    iw.open(map, marker);
  });
}

function createMarker(results) {
  var marker = new google.maps.Marker({
    icon: 'http://maps.google.com/mapfiles/ms/icons/red.png',
    map: map,
    position: results[0].geometry.location,
    title: title,
    animation: google.maps.Animation.DROP,
    address: address,
    url: url
  })
  bounds.extend(marker.getPosition());
  map.fitBounds(bounds);
  infoWindow(marker, map, title, address, url);
  return marker;
}

function geocodeAddress(locations, i) {
  var title = locations[i][0];
  var address = locations[i][1];
  var url = locations[i][2];
  geocoder.geocode({
      'address': locations[i][1]
    },

    function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var marker = new google.maps.Marker({
          icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
          map: map,
          position: results[0].geometry.location,
          title: title,
          animation: google.maps.Animation.DROP,
          address: address,
          url: url
        })
        infoWindow(marker, map, title, address, url);
        bounds.extend(marker.getPosition());
        map.fitBounds(bounds);
      } else {
        alert("geocode of " + address + " failed:" + status);
      }
    });
}

function infoWindow(marker, map, title, address, url) {
  google.maps.event.addListener(marker, 'click', function() {
    var html = "<div><h3>" + title + "</h3><p>" + address + "<br></div><a href='" + url + "'>Website</a></p></div>";
    iw = new google.maps.InfoWindow({
      content: html,
      maxWidth: 350
    });
    iw.open(map, marker);
  });
}

function createMarker(results) {
  var marker = new google.maps.Marker({
    icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
    map: map,
    position: results[0].geometry.location,
    title: title,
    animation: google.maps.Animation.DROP,
    address: address,
    url: url
  })
  bounds.extend(marker.getPosition());
  map.fitBounds(bounds);
  infoWindow(marker, map, title, address, url);
  return marker;
}
