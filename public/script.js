let map, rawPath, kalmanPath, movingPath, oneEuroPath;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 22.507505, lng: 120.412246 },//22.507505, 120.412246
  });

  rawPath = new google.maps.Polyline({ strokeColor: "#f00", map, path: [] });
  kalmanPath = new google.maps.Polyline({ strokeColor: "#0f0", map, path: [] });
  //movingPath = new google.maps.Polyline({ strokeColor: "#00f", map, path: [] });
  //oneEuroPath = new google.maps.Polyline({ strokeColor: "#800080", map, path: [] });
}

window.initMap = initMap;

const socket = new WebSocket("ws://" + location.host);
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);

  rawPath.getPath().push(new google.maps.LatLng(data.raw.lat, data.raw.lng));
  kalmanPath.getPath().push(new google.maps.LatLng(data.kalman.lat, data.kalman.lng));
  //movingPath.getPath().push(new google.maps.LatLng(data.moving.lat, data.moving.lng));
  //oneEuroPath.getPath().push(new google.maps.LatLng(data.oneEuro.lat, data.oneEuro.lng));
};
