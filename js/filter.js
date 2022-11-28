const AD_COUNTS = 10;

const mapFilterType = document.querySelector('#housing-type');
const mapFilterPrice = document.querySelector('#housing-price');
const mapFilterRooms = document.querySelector('#housing-rooms');
const mapFilterGuests = document.querySelector('#housing-guests');
const mapFeatures = document.querySelectorAll('.map__checkbox');

const priceFilter = [0, 10000, 50000];
const transformPriceList = ['low', 'middle', 'high'];
const priceFiltered = (num, value) => {
  const rentPrice = num;
  let result;
  for (let i = 0; i < 3; i++) {
    if(rentPrice > priceFilter[i]) {
      result = transformPriceList[i];
    }
  }
  return (result === value);
};

const featuresFilter = (adFeatures = [], mapFeaturesList) => {
  let result;
  const adFeaturesList = [...adFeatures];
  for (let i = 0; i < mapFeaturesList.length; i++) {
    result = adFeaturesList.includes(mapFeaturesList[i]);
    if (!result) {
      return result;
    }
  }
  return result;
};

const applyFilter = (arr) => {
  const selectedFilteres = [];
  for (let i = 0; i < mapFeatures.length; i++) {
    if(mapFeatures[i].checked) {
      selectedFilteres.push(mapFeatures[i].value);
    }
  }
  const temporalArray = [...arr];
  const result = [];
  for (let i = 0; i < temporalArray.length; i++) {
    if (result.length > AD_COUNTS - 1) {
      break;
    }
    if ((mapFilterType.value !== 'any') && (temporalArray[i].offer.type !== mapFilterType.value)) {
      continue;
    }
    if ((mapFilterRooms.value !== 'any') && (String(temporalArray[i].offer.rooms) !== String(mapFilterRooms.value))) {
      continue;
    }
    if ((mapFilterGuests.value !== 'any') && (String(temporalArray[i].offer.guests) !== String(mapFilterGuests.value))) {
      continue;
    }
    if ((mapFilterPrice.value !== 'any') && (!priceFiltered(temporalArray[i].offer.price, mapFilterPrice.value))) {
      continue;
    }
    if ((selectedFilteres.length !== 0) && (!featuresFilter(temporalArray[i].offer.features, selectedFilteres))) {
      continue;
    }
    result.push(temporalArray[i]);
  }
  return result;

};

export {applyFilter};
