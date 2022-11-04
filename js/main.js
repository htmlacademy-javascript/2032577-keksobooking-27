import {initMap, setOnMapLoad, setOnmainPinMove, setAdPins} from './map.js';
import {nonActive} from './form-active.js';
import {getRentList} from './data.js';
import './form-valid.js';
import './map.js';

// nonActive();

const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};

const offers = getRentList();

initMap(START_COORDINATE);

