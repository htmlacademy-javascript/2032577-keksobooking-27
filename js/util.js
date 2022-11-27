const errorButton = document.querySelector('.error__button');

const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const onSuccess = () => {
  const alertMessage = successTemplate.cloneNode(true);
  document.body.append(alertMessage);
  document.addEventListener('click', () => {
    alertMessage.remove();
  });
};

const onError = () => {
  const alertMessage = errorTemplate.cloneNode(true);
  document.body.append(alertMessage);
  errorButton.addEventListener('click', () => {
    alertMessage.remove();
  });
  document.addEventListener('click', () => {
    alertMessage.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      alertMessage.remove();
    }
  });
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
};

export { onSuccess, onError, showAlert };
