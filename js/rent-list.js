import {getRentList} from './data.js';

const rentListTemplate = document.querySelector('#card').content.querySelector('.popup');
const adRent = getRentList();

const adRentFragment = document.createDocumentFragment();

const createRentList = (offers) => {
  offers.forEach((ad) => {
    const adRentElement = rentListTemplate.cloneNode(true);
    if (ad.author.avatar.length) {
      adRentElement.querySelector('.popup__avatar').setAttribute('src', ad.author.avatar);
    } else {
      adRentElement.querySelector('.popup__avatar').classList.add('visually-hidden');
    }
    if (ad.offer.title.length) {
      adRentElement.querySelector('.popup__title').textContent = ad.offer.title;
    } else {
      adRentElement.querySelector('.popup__title').classList.add('visually-hidden');
    }
    if (ad.offer.address.length) {
      adRentElement.querySelector('.popup__text--address').textContent = ad.offer.address;
    } else {
      adRentElement.querySelector('.popup__text--address').classList.add('visually-hidden');
    }
    if (ad.offer.price) {
      adRentElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
    } else {
      adRentElement.querySelector('.popup__text--price').classList.add('visually-hidden');
    }
    if (ad.offer.type.length) {
      if (ad.offer.type === 'flat') {adRentElement.querySelector('.popup__type').textContent = 'Квартира';}
      if (ad.offer.type === 'bungalow') {adRentElement.querySelector('.popup__type').textContent = 'Бунгало';}
      if (ad.offer.type === 'house') {adRentElement.querySelector('.popup__type').textContent = 'Дом';}
      if (ad.offer.type === 'palace') {adRentElement.querySelector('.popup__type').textContent = 'Дворец';}
      if (ad.offer.type === 'hotel') {adRentElement.querySelector('.popup__type').textContent = 'Отель';}
    } else {
      adRentElement.querySelector('.popup__type').classList.add('visually-hidden');
    }
    if (ad.offer.rooms && ad.offer.rooms) {
      adRentElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей.`;
    } else {
      adRentElement.querySelector('.popup__text--capacity').classList.add('visually-hidden');
    }
    if (ad.offer.checkin.length && ad.offer.checkout.length) {
      adRentElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}.`;
    } else {
      adRentElement.querySelector('.popup__text--time').classList.add('visually-hidden');
    }
    adRentElement.querySelectorAll('.popup__feature').forEach((feature) => {
      let flag = 0;
      for (let i = 0; i <= ad.offer.features.length - 1; i++) {
        if (feature.classList[1].includes(ad.offer.features[i])) {flag++;}
      }
      if (!flag) {feature.remove();}
    });
    if (ad.offer.description.length) {
      adRentElement.querySelector('.popup__description').textContent = ad.offer.description;
    } else {
      adRentElement.querySelector('.popup__description').classList.add('visually-hidden');
    }
    if (ad.offer.photos.length) {
      const adPhotoList = adRentElement.querySelector('.popup__photos');
      const adPhoto = adPhotoList.querySelector('.popup__photo').cloneNode(true);
      adPhotoList.querySelector('.popup__photo').setAttribute('src', ad.offer.photos[0]);
      for (let i = 1; i < ad.offer.photos.length; i++) {
        adPhotoList.appendChild(adPhoto);
        adPhoto.setAttribute('src', ad.offer.photos[i]);
      }
    } else {
      adRentElement.querySelector('.popup__photos').classList.add('visually-hidden');
    }
    adRentFragment.appendChild(adRentElement);
  });
  return adRentFragment;
};

export {createRentList};



