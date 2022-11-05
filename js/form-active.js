function nonActive() {
  const adForm = document.querySelector('.ad-form');
  const adFormHeader = document.querySelector('.ad-form-header');
  const adFormList = document.querySelectorAll('.ad-form__element');
  const mapForm = document.querySelector('.map__filters');
  const mapFormList = document.querySelectorAll('.map__filter');
  const mapFormFeatures = document.querySelector('.map__features');
  adForm.classList.add('ad-form--disabled');
  adFormHeader.setAttribute('disabled', 'disabled');
  adFormList.forEach((elem) => elem.setAttribute('disabled', 'disabled'));
  mapForm.classList.add('map__filters--disabled');
  mapFormList.forEach((elem) => elem.setAttribute('diabled', 'disabled'));
  mapFormFeatures.setAttribute('disabled', 'disabled');
}

function active() {
  const adForm = document.querySelector('.ad-form');
  const adFormHeader = document.querySelector('.ad-form-header');
  const adFormList = document.querySelectorAll('.ad-form__element');
  const mapForm = document.querySelector('.map__filters');
  const mapFormList = document.querySelectorAll('.map__filter');
  const mapFormFeatures = document.querySelector('.map__features');
  adForm.classList.remove('ad-form--disabled');
  adFormHeader.removeAttribute('disabled');
  adFormList.forEach((elem) => elem.removeAttribute('disabled'));
  mapForm.classList.remove('map__filters--disabled');
  mapFormList.forEach((elem) => elem.removeAttribute('disabled'));
  mapFormFeatures.removeAttribute('disabled');
}
const coordinateForm = document.querySelector('#address');

const setDefaultCoordinate = (defaultCoordinate) => {
  coordinateForm.value = `${defaultCoordinate.lat}, ${defaultCoordinate.lng}`;
}
const setCoordinate = (coordinate) => {
  coordinateForm.value = String(coordinate).slice(7, -1);
}

export {nonActive, active, setCoordinate, setDefaultCoordinate};
