import { sendRentAd } from './server-data.js';
import { onSuccess, onError } from './util.js';
import {setDefaultCoordinate} from './form-active.js';

const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};

const adForm = document.querySelector('.ad-form');
const submitButton = document.querySelector('.ad-form__submit');
const avatarPreview = document.querySelector('.ad-form-header__preview__image');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  erorTextClass: 'form__error',
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);

const priceField = adForm.querySelector('#price');
const typeForm = adForm.querySelector('#type');

const priceOption = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const validatePrice = () => priceField.value < 100000 && priceField.value >= priceOption[typeForm.value];

const getValidateErrorText = () => priceField.value < 100000
  ? `Минимальная цена за ночь ${priceOption[typeForm.value]}.`
  : 'Максимальная цена за ночь 100 000.';

pristine.addValidator(
  adForm.querySelector('#price'),
  validatePrice,
  getValidateErrorText
);

typeForm.addEventListener('change', () => {
  priceField.setAttribute('placeholder', priceOption[typeForm.value]);
});

const guestsOption = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const countGuest = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

const validateCapacity = () => guestsOption[countGuest.value].indexOf(capacity.value) + 1;

pristine.addValidator(
  adForm.querySelector('#capacity'),
  validateCapacity,
  'Измените количество мест!'
);

const timeinForm = document.querySelector('#timein');
const timeoutForm = document.querySelector('#timeout');

timeinForm.addEventListener('change', () => {
  timeoutForm.value = timeinForm.value;
});

timeoutForm.addEventListener('change', () => {
  timeinForm.value = timeoutForm.value;
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const submitRentAd = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendRentAd(
        () => {
          onSuccess();
          unblockSubmitButton();
          adForm.reset();
          setDefaultCoordinate(START_COORDINATE);
          avatarPreview.src = 'img/muffin-grey.svg';
        },
        () => {
          onError();
          unblockSubmitButton();
          setDefaultCoordinate(START_COORDINATE);
          avatarPreview.src = 'img/muffin-grey.svg';
        },
        new FormData(evt.target)
      );
    }
  });
};

const resetButton = document.querySelector('.ad-form__reset');

const onResetButton = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    adForm.reset();
    setDefaultCoordinate(START_COORDINATE);
    avatarPreview.src = 'img/muffin-grey.svg';
  });
};

export { submitRentAd, onResetButton };
