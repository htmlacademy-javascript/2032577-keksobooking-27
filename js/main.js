import {initMap, setOnMapLoad, setOnMainPinMove} from './map.js';
import {nonActive, active, setCoordinate, setDefaultCoordinate} from './form-active.js';
import './slider.js';
import {submitRentAd, onResetButton} from './form-valid.js';
import './map.js';
import {changeFilter} from './server-data.js';
import {changeAvatar} from './avatar.js';

const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};

nonActive();
initMap(START_COORDINATE);
changeFilter();
setOnMapLoad(active());
setDefaultCoordinate(START_COORDINATE);
setOnMainPinMove(setCoordinate);
submitRentAd();
onResetButton();
changeAvatar();
