const sliderElement = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');
const type = document.querySelector('#type');
const minPrice = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000
}

noUiSlider.create(sliderElement, {
  range: {
    min: 1000,
    max: 100000
  },
  start: 10000,
  step: 100,
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});


sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
})

type.addEventListener('change', (evt) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: minPrice[evt.target.value],
      max: 100000
    }
  })
})
