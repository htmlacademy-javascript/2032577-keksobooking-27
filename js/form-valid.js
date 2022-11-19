const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  erorTextClass: 'form__error'
});

function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);

const priceField = adForm.querySelector('#price');
const typeForm = adForm.querySelector('#type');

const priceOption = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000
};

function validatePrice () {
  return priceField.value < 100000 && priceField.value >= priceOption[typeForm.value];
}

function getValidateErrorText () {
  return (priceField.value < 100000) ? `Минимальная цена за ночь ${priceOption[typeForm.value]}.` : 'Максимальная цена за ночь 100 000.';
}

pristine.addValidator(
  adForm.querySelector('#price'),
  validatePrice,
  getValidateErrorText
);

typeForm.addEventListener('change', () => {
  priceField.setAttribute('placeholder', priceOption[typeForm.value]);
});

const timeinForm = document.querySelector('#timein');
const timeoutForm = document.querySelector('#timeout');

timeinForm.addEventListener('change', () => {
  timeoutForm.value = timeinForm.value;
}
);

timeoutForm.addEventListener('change', () => {
  timeinForm.value = timeoutForm.value;
}
);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

