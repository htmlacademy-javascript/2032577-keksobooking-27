import {initMap, setOnMapLoad, setOnMainPinMove, setAdPins} from './map.js';
import {nonActive, active, setCoordinate, setDefaultCoordinate} from './form-active.js';
import './slider.js';
import './form-valid.js';
import './map.js';
import {getRentAds} from './server-data.js'

nonActive();

const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};


initMap(START_COORDINATE);
getRentAds();
setOnMapLoad(active());
setDefaultCoordinate(START_COORDINATE);
setOnMainPinMove(setCoordinate);

