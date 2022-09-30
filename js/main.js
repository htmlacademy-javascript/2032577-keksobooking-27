const randomize = (min, max) => {
  if (max - min >= 1 && min > -1) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return NaN;
};

const randomizeCordinate = (min, max, afterDote) => {
  if (max - min > 0 && min >= 0) {
    const number = Math.random() * (max - min) + min;
    return Number(number.toFixed(afterDote));
  }
  return NaN;
};
