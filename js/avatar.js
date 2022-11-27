const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarFile = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview__image');

const changeAvatar = () => {
  avatarFile.addEventListener('change', () => {
    const avatar = avatarFile.files[0];
    const avatarName = avatar.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => avatarName.endsWith(it));

    if (matches) {
      avatarPreview.src = URL.createObjectURL(avatar);
    }
  });
};

export {changeAvatar};
