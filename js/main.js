function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

function getRandomPositiveIntegerNotRepeatArray (a, b, lenght) {
  let number = 0;
  const arrayNumbers = [];
  while (arrayNumbers.length < lenght) {
    number = String(getRandomPositiveInteger (a, b));
    if (arrayNumbers.includes(`0${number}`) || arrayNumbers.includes(number)) {
      continue;
    }
    (number < 10) ? arrayNumbers.push(`0${number}`) : arrayNumbers.push(number);
  }
  return arrayNumbers;
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

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

function shuffle(elements) {
  const shuffleList = elements.slice();
  for (let i = 0; i < shuffleList.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = shuffleList[i];
    shuffleList[i] = shuffleList[j];
    shuffleList[j] = tmp;
  }
  return shuffleList;
}

function getArrayRandomCount(elements) {
  const shuffleList = shuffle(elements.slice());
  const randomCountArray = [];
  for (let l = 0; l < getRandomPositiveInteger(1, elements.length); l++) {
    randomCountArray.push(shuffleList[l]);
  }
  return randomCountArray;
}

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

const rentList = Array.from({length: RENT_ADD_COUNT}, createApartmentAdd);