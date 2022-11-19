import { setAdPins } from "./map.js";
import { showAlert } from "./util.js";

const getRentAds = () => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
    return response.json();
    } else {
      showAlert('Произошла ошибка при загрузке объявлений, обновите страницу!');
    }
  })
  .then((ads) => {
    setAdPins(ads);
  })
  .catch(() => {
    showAlert('Произошла ошибка при загрузки карты, обновите страницу!')
  });

};

const sendRentAd = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )

  .then((response) => {
    if(response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
  .catch(() => {
    onFail();
  });
}

export {getRentAds, sendRentAd}
