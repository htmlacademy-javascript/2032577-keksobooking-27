import {createRentAd} from './rent-list.js';


const AD_COUNTS = 10;
const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const adPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const mainPinMarker = L.marker(
  {
    lat: 0,
    lng: 0
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

const initMap = (coordinate) => {
  map.setView(coordinate, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  mainPinMarker.setLatLng(coordinate);
  mainPinMarker.addTo(map);
};

const createAdPinMarkers = (ads) => {
  ads.forEach((ad) => {
    const marker = L.marker(
      {
        lat: ad.location.lat,
        lng: ad.location.lng,
      },
      {
        icon: adPinIcon
      }
    );
    marker.addTo(markerGroup).bindPopup(createRentAd(ad));
  });
};

const setAdPins = (offers) => {
  markerGroup.clearLayers();
  createAdPinMarkers(offers.slice(0, AD_COUNTS));
};

const setOnMapLoad = (cb) => {
  map.on('load', cb);
};

const setOnMainPinMove = (cb) => {
  mainPinMarker.on('move', (evt) => (cb(evt.target.getLatLng())));
};

export {initMap, setOnMapLoad, setOnMainPinMove, setAdPins, createAdPinMarkers};
