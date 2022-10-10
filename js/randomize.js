const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getRandomPositiveIntegerNotRepeatArray = (a, b, lenght) => {
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
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const shuffle = (elements) => {
  const shuffleList = elements.slice();
  for (let i = 0; i < shuffleList.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = shuffleList[i];
    shuffleList[i] = shuffleList[j];
    shuffleList[j] = tmp;
  }
  return shuffleList;
};

const getArrayRandomCount = (elements) => {
  const shuffleList = shuffle(elements.slice());
  const randomCountArray = [];
  for (let l = 0; l < getRandomPositiveInteger(1, elements.length); l++) {
    randomCountArray.push(shuffleList[l]);
  }
  return randomCountArray;
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getArrayRandomCount, getRandomArrayElement, getRandomPositiveIntegerNotRepeatArray};
