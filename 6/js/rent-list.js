import {getRentList} from './data.js';

const rentList = document.querySelector('#map-canvas');
const rentListTemplate = document.querySelector('#card').content.querySelector('.popup');
const adRent = getRentList();

const adRentFragment = document.createDocumentFragment();

adRent.forEach((ad) => {
  const adRentElement = rentListTemplate.cloneNode(true);
  ad.author.avatar.length !== 0 ? adRentElement.querySelector('.popup__avatar').setAttribute('src',ad.author.avatar) : adRentElement.querySelector('.popup__avatar').classList.add('visually-hidden');
  ad.offer.title.length !== 0 ? adRentElement.querySelector('.popup__title').textContent = ad.offer.title : adRentElement.querySelector('.popup__title').classList.add('visually-hidden');
  ad.offer.address.length !== 0 ? adRentElement.querySelector('.popup__text--address').textContent = ad.offer.address : adRentElement.querySelector('.popup__text--address').classList.add('visually-hidden');
  ad.offer.price.length !== 0 ? adRentElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь` : adRentElement.querySelector('.popup__text--price').classList.add('visually-hidden');
  if (ad.offer.type.length !== 0) {
    adRentElement.querySelector('.popup__type').textContent = ad.offer.type === 'flat' ? 'Квартира' :
    ad.offer.type === 'bungalow' ? 'Бунгало' :
    ad.offer.type === 'house' ? 'Дом' :
    ad.offer.type === 'palace' ? 'Дворец' :
    ad.offer.type === 'hotel' ? 'Отель' : '';
  } else {
    adRentElement.querySelector('.popup__type').classList.add('visually-hidden');
  }
  ad.offer.rooms.length !== 0 && ad.offer.rooms.length !== 0 ? adRentElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей.` : adRentElement.querySelector('.popup__text--capacity').classList.add('visually-hidden');
  ad.offer.checkin.length !== 0 && ad.offer.checkout.length !== 0 ? adRentElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}.` : adRentElement.querySelector('.popup__text--time').classList.add('visually-hidden');
  adRentElement.querySelectorAll('.popup__feature').forEach((feature) => {
    let flag = 0;
    for (let i = 0; i <= ad.offer.features.length - 1; i++) {
      feature.classList[1].includes(ad.offer.features[i]) ? flag++ : flag = flag;
    };
    flag === 0 ? feature.remove() : '';
  });
  ad.offer.description.length !== 0 ? adRentElement.querySelector('.popup__description').textContent = ad.offer.description : adRentElement.querySelector('.popup__description').classList.add('visually-hidden');
  if (ad.offer.photos.length !== 0) {
    const adPhotoList = adRentElement.querySelector('.popup__photos');
    const adPhoto = adPhotoList.querySelector('.popup__photo').cloneNode(true);
    adPhotoList.querySelector('.popup__photo').setAttribute('src', ad.offer.photos[0]);
    for (let i = 1; i < ad.offer.photos.length; i++) {
      adPhotoList.appendChild(adPhoto);
      adPhoto.setAttribute('src', ad.offer.photos[i]);
    };
  } else {
    adRentElement.querySelector('.popup__photos').classList.add('visually-hidden');
  };
  adRentFragment.appendChild(adRentElement);
});

rentList.appendChild(adRentFragment);


