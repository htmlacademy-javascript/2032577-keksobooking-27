import {getRandomPositiveInteger} from './randomize.js';
import {getRandomPositiveFloat} from './randomize.js';
import {getArrayRandomCount} from './randomize.js';
import {getRandomArrayElement} from './randomize.js';
import {getRandomPositiveIntegerNotRepeatArray} from './randomize.js';

const RENT_ADD_COUNT = 10;

const AVATARS = getRandomPositiveIntegerNotRepeatArray(1, RENT_ADD_COUNT, RENT_ADD_COUNT);

const TITLES = [
  'Аренда великолепной квартиры',
  'Сдается уютное жилье',
  'Сдам квартиру вашей мечты',
  'Сдам уютный уголок для молодой семьи'
];
const RENT_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTION = [
  'Красивая квартира с высокими потолками и большими окнами.',
  'Квартира для настоящих ценителей средневековья, паутина, плесень и смрадный запашок включены.',
  'Вы всегда мечтали жить в этом доме, большие комнаты и удобное расположение мебели понравится каждому'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createApartmentAdd = () => ({
  author: {
    avatar: `img/avatars/user${AVATARS.pop()}.png`
  },
  offer: {
    title: getRandomArrayElement(TITLES),
    address: '',
    price: getRandomPositiveInteger(10, 1000),
    type: getRandomArrayElement(RENT_TYPE),
    rooms: getRandomPositiveInteger(1, 6),
    guests: getRandomPositiveInteger(1, 10),
    checkin: getRandomArrayElement(CHECK_TIME),
    checkout: getRandomArrayElement(CHECK_TIME),
    features: getArrayRandomCount(FEATURES),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getArrayRandomCount(PHOTOS)
  },
  location: {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
  }
});

const getRentList = () => Array.from({length: RENT_ADD_COUNT}, createApartmentAdd);

export {getRentList};
