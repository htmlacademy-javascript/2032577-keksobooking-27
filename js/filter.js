const priceFilter = [0, 10000, 50000];
const transformPriceList = ['low', 'middle', 'high'];
const priceFiltered = (num, value) => {
  let rentPrice = num;
  let result;
  for (let i = 0; i < 3; i++) {
    if(rentPrice > priceFilter[i]) {
      result = transformPriceList[i];
    }
  }
  return (result === value);
}

const featuresFilter = (adFeatures, mapFeatures) => {
  let result;
  for (let i = 0; i < mapFeatures.length; i++) {
    result = mapFeatures[i].includes(adFeatures);
    if (!result) {
      return false
    }
  }
  return result
}

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
  let result = arr.slice();
  if (mapFilterType !== 'any') {
    result = result.filter(arg => arg.offer.type === mapFilterType);
  };
  if (mapFilterRooms !== 'any') {
    result = result.filter(arg => String(arg.offer.rooms) === String(mapFilterRooms));
  }
  if (mapFilterGuests !== 'any') {
    result = result.filter(arg => String(arg.offer.guests) === String(mapFilterGuests));
  }
  if (mapFilterPrice !== 'any') {
    result = result.filter(arg => priceFiltered(arg.offer.price, mapFilterPrice));
  }
  if (mapFeatures.length != 0) {
    result = result.filter(arg => ((arg.offer.features != undefined) && featuresFilter(arg.offer.features, selectedFilteres)));
  }
  return result
}



export {applyFilter}
