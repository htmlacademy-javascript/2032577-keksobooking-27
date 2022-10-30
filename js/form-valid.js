const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  erorTextClass: 'form__error'
}, false);

function validateTitle (value) {
  return value.length >= 30 && value.length <= 1000;
}

pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
