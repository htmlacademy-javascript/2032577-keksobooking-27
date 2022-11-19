const rentListTemplate = document.querySelector('#card').content.querySelector('.popup');

const typeEngRUList = {
  flat: 'Квартира',
  bunglow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const createRentAd = (ad) => {
  const adRentElement = rentListTemplate.cloneNode(true);
  adRentElement.querySelector('.popup__avatar').setAttribute('src', ad.author.avatar);
  adRentElement.querySelector('.popup__title').textContent = ad.offer.title;
  adRentElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adRentElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  adRentElement.querySelector('.popup__type').textContent = typeEngRUList[ad.offer.type];
  adRentElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей.`;
  adRentElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}.`;
  if (ad.offer.hasOwnProperty('features')) {
    adRentElement.querySelectorAll('.popup__feature').forEach((feature) => {
      let flag = 0;
      for (let i = 0; i <= ad.offer.features.length - 1; i++) {
        if (feature.classList[1].includes(ad.offer.features[i])) {
          flag++;
        }
      }
      if (!flag) {
        feature.remove();
      }
    });
  } else {
    adRentElement.querySelector('.popup__feature').remove();
  };
  if (ad.offer.hasOwnProperty('description')) {
    adRentElement.querySelector('.popup__description').textContent =
      ad.offer.description;
  } else {
    adRentElement.querySelector('.popup__description').remove();
  }
  if (ad.offer.hasOwnProperty('photos')) {
    const adPhotoList = adRentElement.querySelector('.popup__photos');
    const adPhoto = adPhotoList.querySelector('.popup__photo').cloneNode(true);
    adPhotoList
      .querySelector('.popup__photo')
      .setAttribute('src', ad.offer.photos[0]);
    for (let i = 1; i < ad.offer.photos.length; i++) {
      adPhotoList.appendChild(adPhoto);
      adPhoto.setAttribute('src', ad.offer.photos[i]);
    }
  } else {
    adRentElement.querySelector('.popup__photos').remove();
  }
  return adRentElement;
};

export {createRentAd};
