import { setAdPins } from "./map.js";

const getRentAds = (onSucces) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    return response.json();
  })
  .then((ads) => {
    setAdPins(ads)
  });

};

export {getRentAds}
