const AD_COUNTS = 10;
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

const featuresFilter = (adFeatures = [], mapFeatures) => {
  let result = true;
  const adFeaturesList = adFeatures.from();
  for (let i = 0; i < mapFeatures.length; i++) {
    result = adFeaturesList.includes(mapFeatures[i]);
  }
  return result;
};

const applyFilter = (arr) => {
  const mapFilterType = document.querySelector('#housing-type').value;
  const mapFilterPrice = document.querySelector('#housing-price').value;
  const mapFilterRooms = document.querySelector('#housing-rooms').value;
  const mapFilterGuests = document.querySelector('#housing-guests').value;
  const mapFeatures = document.querySelectorAll('.map__checkbox');
  const selectedFilteres = [];
  mapFeatures.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedFilteres.push(checkbox.value);
    }
  });
  const temporalArray = arr.slice();
  const result = [];
  for (let i = 0; i < temporalArray.length; i++) {
    if (result.length > AD_COUNTS - 1) {
      break;
    }
    if ((mapFilterType !== 'any') && (temporalArray[i].offer.type !== mapFilterType)) {
      continue;
    }
    if ((mapFilterRooms !== 'any') && (String(temporalArray[i].offer.rooms) !== String(mapFilterRooms))) {
      continue;
    }
    if ((mapFilterGuests !== 'any') && (String(temporalArray[i].offer.guests) !== String(mapFilterGuests))) {
      continue;
    }
    if ((mapFilterPrice !== 'any') && (!priceFiltered(temporalArray[i].offer.price, mapFilterPrice))) {
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
