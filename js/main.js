import {initMap, setOnMapLoad, setOnMainPinMove, setAdPins} from './map.js';
import {nonActive, active, setCoordinate, setDefaultCoordinate} from './form-active.js';
import {getRentList} from './data.js';
import './slider.js';
import './form-valid.js';
import './map.js';

nonActive();

const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};

const offers = getRentList();

initMap(START_COORDINATE);
setAdPins(offers);
setOnMapLoad(active());
setDefaultCoordinate(START_COORDINATE);
setOnMainPinMove(setCoordinate);

