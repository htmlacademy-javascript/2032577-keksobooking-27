import { setAdPins } from './map.js';
import { showAlert } from './util.js';
import { applyFilter } from './filter.js';

const mapFilterType = document.querySelector('#housing-type');
const mapFilterRooms = document.querySelector('#housing-rooms');
const mapFilterGuests = document.querySelector('#housing-guests');
const mapFilterPrice = document.querySelector('#housing-price');
const mapFeatures = document.querySelector('#housing-features');

const getRentAds = () => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert(
          'Произошла ошибка при загрузке объявлений, обновите страницу!'
        );
      }
    })
    .then((ads) => {
      setAdPins(applyFilter(ads));
    })
    .catch(() => {
      showAlert('Произошла ошибка при загрузке объявлений, обновите страницу!');
    });
};

const changeFilter = () => {
  mapFilterType.addEventListener('change', getRentAds);
  mapFilterRooms.addEventListener('change', getRentAds);
  mapFilterGuests.addEventListener('change', getRentAds);
  mapFilterPrice.addEventListener('change', getRentAds);
  mapFeatures.addEventListener('change', getRentAds);
};

const sendRentAd = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getRentAds, sendRentAd , changeFilter};
